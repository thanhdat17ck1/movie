import React from 'react'
import Router from '../../Router'
import Header from '../Header/Header'
import style from './Layouts.module.scss'

export default function Layout() {
  return (
    <div>
        <Header />

        <main className={style["content"]}>
            <Router></Router>
            <div className='sidebar'>
              
            </div>
        </main>
    </div>
  )
}
