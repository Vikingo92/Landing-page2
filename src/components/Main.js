import React from 'react'
import { Card } from './Card';
import { Section } from './Section';
import {Comments} from './Comments'
import Access from './Access';
import { Footer } from './Footer';
 
export const Main = () => {
    return (
        <div>
            <Card />
            <Section />
            <Comments/>
            <Access/>
            <Footer/>
        </div>
    )
}
