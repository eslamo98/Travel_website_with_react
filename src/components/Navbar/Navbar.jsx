import React, {useEffect} from 'react'
import "./navbar.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonHiking,faShoppingCart,faSearch,faTimes, faBars } from '@fortawesome/free-solid-svg-icons'
const Navbar = ({windowSize, setWindowSize}) => {

    const [search, setSearch] = React.useState("");
    const [pageOffset, setPageOffset] = React.useState(window.pageYOffset);
    
    
    const handleSearch = (e) => {
        e.preventDefault();
        console.log(search)
    }
    const showSearchForm = () => {
        document.querySelector(".search-form").classList.add("down")
    }

    const hideSearchForm = () => {
        document.querySelector(".search-form").classList.remove("down")
    }

    const showSmallLinks = () => {
        document.querySelector(".small-nav-links").classList.add("show-small-links")
    }

    const hideSmallLinks = () => {
        document.querySelector(".small-nav-links").classList.remove("show-small-links")
    }

    window.onresize = () => {
        setWindowSize(window.innerWidth)
    }


    useEffect(() => {
        window.onscroll = () => {
            setPageOffset(window.pageYOffset)
        }
    },[pageOffset])

    console.log(pageOffset)

    const LargeLinks = () => {
        return (
            <div className="nav-links">
                <ul className="list-links">
                    <li><a href="#main">Home</a></li>
                    <li><a href="#outdoor">About</a></li>
                    <li><a href="#features">Shop</a></li>
                    <li><a href="#packages">Packages</a></li>
                    <li><a href="#Reviews">Reviews</a></li>
                    <li><a href="#blogs">Blogs</a></li>
                </ul>
            </div>
        )
    }

    const SmallLinks = () => {
        return (
            <div className="nav-links">
                <div className="menu-icon" onClick={showSmallLinks}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className="small-nav-links">
                    <div className="close" onClick={hideSmallLinks}>
                        <button><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <ul className="list-small-links">
                        <li><a href="#main">Home</a></li>
                        <li><a href="#outdoor">About</a></li>
                        <li><a href="#features">Shop</a></li>
                        <li><a href="#packages">Packages</a></li>
                        <li><a href="#Reviews">Reviews</a></li>
                        <li><a href="#blogs">Blogs</a></li>
                    </ul>
                </div>
            </div>
        )
    }
    
  return (
    <header style={{background: pageOffset > 100 ? "#fff" : "transparent",
    boxShadow: pageOffset > 100 ? "0 0.5rem 1rem rgb(0 0 0 / 10%)" : "none"}}>
        <nav style={{padding: windowSize > 1200 ? "0 9%" : "1rem"}}>
            <div className="search-form">
                <div className="inner-search-form">
                    <div className="close" onClick={hideSearchForm}>
                    <button><FontAwesomeIcon icon={faTimes} /></button>
                    </div>
                    <form className='header-form' onSubmit={handleSearch}>
                        <input 
                        onChange={(e)=>{setSearch(e.target.value)}} 
                        type="text" 
                        name='search' 
                        placeholder='search here'
                        value={search}
                        />
                        <button type='submit'><FontAwesomeIcon className='search-icon' icon={faSearch} /></button>
                    </form>
                </div>
            </div>
            <div className="logo">
                <FontAwesomeIcon icon={faPersonHiking} color="#219150"/>
                Travel.
            </div>
            <div className="links-btns">
            {windowSize > 740 ? <LargeLinks /> : <SmallLinks />}
            <div className="nav-icons">
                <a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a>
                <div onClick={showSearchForm}><FontAwesomeIcon icon={faSearch} /></div>
            </div>
            </div>
        </nav>
    </header>
  )
}

export default Navbar