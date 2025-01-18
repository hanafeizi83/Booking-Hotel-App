import { useRef, useState } from 'react'
import { HiCalendar, HiLocationMarker, HiMinus, HiPlus, HiSearch } from 'react-icons/hi'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import useOutsideClick from '../../hook/useOutsideClick';
import HotelsHomeList from '../HotelsHomeList/HotelsHomeList';

function Home() {
    return (
        <>
            <div>
                <div className="container">
                    <div className="headerCotain">
                        <div className="headerHotelDesc">
                            <h2>Find your best stay with Serenity Hotel</h2>
                            <p>Find and book your best stay with Serenity Hotel in world</p>
                        </div>
                    </div>
                    <HeaderSearch />
                </div>
                <HotelsHomeList />
            </div>
        </>
    )
}

export default Home

function HeaderSearch() {
    const [destination, setDestination] = useState('');
    const [isOptinsOpen, setIsOptionsOpen] = useState(false);
    const [options, setOptions] = useState({
        Guests: 1,
        Children: 0,
        Room: 1
    });
    const [date, setDate] = useState([{
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection',
    }]);
    const [isDateOpen, setIsDateOpen] = useState(false)
    const handleactions = (type, operator) => {
        if (operator === 'inc') {
            setOptions(prev => {
                return {
                    ...prev,
                    [type]: options[type] + 1
                }
            })
        }
    }


    const handleSearch = () => {

    }

    return (
        <>
            <div className="headerSearchContainer">
                <div className="headerSearchItem">
                    <label htmlFor="destination">Destination :</label>
                    <input
                        type="text"
                        name='destination'
                        id='destination'
                        placeholder='whre do you go ?'
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                    <HiLocationMarker className='icon iconLocation' />
                </div>
                <div className="headerSearchItem">
                    <label>Date :</label>
                    <div
                        id="dropDownDate"
                        onClick={() => setIsDateOpen(is => !is)}
                    >
                        {`${format(date[0].startDate, 'MM,dd,yy')} To ${format(date[0].endDate, 'MM,dd,yy')}`}
                    </div>
                    <HiCalendar className='icon iconCalender' />
                    {isDateOpen &&
                        <DateRange
                            className='date'
                            ranges={date}
                            onChange={item => setDate([item.selection])}
                            minDate={new Date()}
                            moveRangeOnFirstSelection={true}
                        />}
                </div>
                <div className="headerSearchItem">
                    <label>Options :</label>
                    {isOptinsOpen && <HeaderSearchOptions options={options} handleactions={handleactions} setIsOptionsOpen={setIsOptionsOpen} />}
                    <div
                        id='dropDownOptins'
                        onClick={() => setIsOptionsOpen(is => !is)}

                    >1 adult &bull; 2 children &bull; 1 room</div>
                </div>
                <button className='btn btnSearchHeader' onClick={handleSearch}>
                    <HiSearch className='searchicon' />
                </button>
            </div>
        </>
    )
}

function HeaderSearchOptions({ options, handleactions, setIsOptionsOpen }) {
    const optionsRef = useRef()
    useOutsideClick(optionsRef, 'dropDownOptins', () => setIsOptionsOpen(false))
    return (
        <div className="headerSearchOptions" ref={optionsRef}>
            <OptionsItem type='Guests' options={options} minLimit={1} handleactions={handleactions} />
            <OptionsItem type='Children' options={options} minLimit={0} handleactions={handleactions} />
            <OptionsItem type='Room' options={options} minLimit={1} handleactions={handleactions} />
        </div>
    )
}

function OptionsItem({ type, options, minLimit, handleactions }) {
    return (
        <div className="searchOptionsItem">
            <p>{type}</p>
            <div className="optionsCounter">
                <button
                    className='btn btnCounter'
                    onClick={() => handleactions(type, 'dec')}
                    disabled={options[type] <= minLimit}
                >
                    <HiMinus />
                </button>
                <span>{options[type]}</span>
                <button
                    className='btn btnCounter'
                    onClick={() => handleactions(type, 'inc')}
                >
                    <HiPlus />
                </button>
            </div>
        </div>
    )
}

