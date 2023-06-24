import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className='Cards'>
        <h1>FUTURE IS IN YOUR HANDS!!!</h1>
        <div className="cards__container">
           <div className='cards__wrapper'>
            <ul className="cards__items">
                
                <CardItem 
                src='images.jpg'
                text="‘What after 12th ?’ is the common question among the generation of students studying in 12th standard.
                 Every year the questions hit lakhs of students in India and abroad.
                  The confusion prevails among them concerning career prospects, job opportunities and yes, their passion, their preference.
                   Counselors say that the lack of proper information about the courses available in India and their career prospects, is somewhere responsible.
                    Science, Commerce and Arts are the options available in which students can find a suitable course to pursue after 12th.

                Choosing a course shall never be a convenient option rather it should be a highly motivating choice for the students. 
                Interests, motivation, and goals are prime factors students must consider while choosing a course from the range of courses available in India to pursue after 12th.
                 Students can choose a course from top domains including Engineering, Architecture, Design, Law, Applied Science, Business Studies, Management, Behavioral and Social Sciences, Economics, Media, Humanities, and more."
                /> 
                <CardItem
                src="image4.jpg"
                
                path='/Home'
                 />
                 
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default Cards;