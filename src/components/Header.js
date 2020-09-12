import React, { useState } from 'react'
import Tabs from './tabs/Tabs'
import useScrollDirection from '../hooks/useScrollDirection'
import Modal from 'react-bootstrap/Modal'
import Calendar from './Calendar'

function Header() {
    const scrollDirection = useScrollDirection();

    const [show, setShow] = useState(false);
    const [searchQuery, setSearchQuery] = useState('')
    const selectedDay = (val) => {
        console.log(val)
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const queryInput = (e) => {
        setSearchQuery(e.target.value)
    }

    return (
        <div className="header">
            
            <div className="header-nav-delivery">
                <div className="back-icon">
                    <i class="material-icons md-36">
                        keyboard_backspace
          </i>
                </div>
                <div className="header-address">
                    <div className="address-title">
                        ALAMAT PENGANTARAN
          </div>
                    <div onClick={handleShow} className="selected-address">
                        <div className="address">
                            Tokopedia Tower
            </div>
                        <i class="material-icons md-12 orange600">
                            keyboard_arrow_down
            </i>
                    </div>
                </div>
            </div>
            <div className="date-picker">
            <Calendar></Calendar>
            </div>
            {scrollDirection == 'down' ? <></> : <Tabs></Tabs>}
            <div className="modal-test">
                <Modal show={show} onHide={handleClose}>
                    <div className="modal-screen">
                        <div onClick={() => handleClose()} className="close-button">
                            <span class="material-icons">
                                close
              </span>
                        </div>
                        <div className="modal-title">
                            Cek makanan yang tersedia di lokasi kamu!
                         </div>
                        <div className="search-bar-modal">
                            <i className="location-icon material-icons md-16">
                                place
                            </i>
                            <input onChange={(e) => queryInput(e)} value={searchQuery} className="search-bar-query" type="text" id="query-location" name="query-location" />
                        </div>
                        {searchQuery.length > 3 ? <div className="search-result">
                            <div className="location-result">
                                <div className="result-icon">
                                    <i className="icon-location material-icons md-16">
                                        place
                                     </i>
                                </div>
                                <div className="location-name-address">
                                    <div className="location-name">
                                        <span>Kulina</span>
                                    </div>
                                    <div className="location-address">
                                        Jalan Tulodong Atas 28, Senayan, Kebayoran Baru No.12
                                    </div>
                                </div>
                            </div>
                            <div className="location-result">
                                <div className="result-icon">
                                    <i className="icon-location material-icons md-16">
                                        place
                                    </i>
                                </div>
                                <div className="location-name-address">
                                    <div className="location-name">
                                        <span>Pancoran Riverside Apartment</span>
                                    </div>
                                    <div className="location-address">
                                        Jl. Pengadegan Timur I No.30, RT.12/RW.1, Pengadegan, Kec. Pancoran, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12770
                                    </div>
                                </div>
                            </div>
                            <div className="location-result">
                                <div className="result-icon">
                                    <i className="icon-location material-icons md-16">
                                        place
                                    </i>
                                </div>
                                <div className="location-name-address">
                                    <div className="location-name">
                                        <span>Block71 Jakarta </span>
                                    </div>
                                    <div className="location-address">
                                        Ariobimo Sentral, South Jakarta, RT.9/RW.4, East Kuningan, Jakarta, 12950
                                     </div>
                                </div>
                            </div>
                        </div> : <div className="search-result"></div>}
                    </div>
                </Modal>
            </div>
        </div>
    )
}

export default Header
