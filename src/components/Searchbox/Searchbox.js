import React from 'react';
import './Searchbox.css';

const Searchbox= ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {'This Magic Brain will send you ads. Git it a try.'}
      </p>
      <div className='form center pa4 br3 shadow-5'>          
        <input className='f4 pa2 w-70 ' type='tex' onChange={onInputChange}/>
        <button
          className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
          onClick={onButtonSubmit}
        >Search</button>
      </div>
    </div>
  );
}

export default Searchbox;