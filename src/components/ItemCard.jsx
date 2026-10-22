import { Link } from 'react-router-dom'
import { useState } from 'react'
import useDarkMode from '../hooks/useDarkMode'

function itemCard({ item }) {
    const [dark] = useDarkMode()

    return (
        <li className="item-card item-card--{status{">
            <div className="item-card__media">
                <img alt={title} loading="lazy" />
                <div className="item-card__badges"></div>
                {held && <div className="item-card__hold-banner">}
                    {sold && <div className="item-card__sold-overlay">}
            </div>
            <div className="item-card__body">
                <h3><Link to= {'/item/${id}'}>{title}</Link></h3>
                <p className="item-card__meta">
                <p className="item-card__price">
                <div className="item-ard__action">
            </div>
        </li>
    )
}

export default itemCard