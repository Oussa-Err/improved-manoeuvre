import React from 'react'
import './blog.css'
import { Article }  from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from '../../containers/blog/imports';

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading gradient__text'>
        <h1>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date='march 25, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' text='Read Full Article' />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date='march 25, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' text='Read Full Article'/>
          <Article imgUrl={blog03} date='march 25, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' text='Read Full Article'/>
          <Article imgUrl={blog04} date='march 25, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' text='Read Full Article'/>
          <Article imgUrl={blog05} date='march 25, 2023' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' text='Read Full Article'/>
        </div>
      </div>
    </div>
  )
}

export default Blog