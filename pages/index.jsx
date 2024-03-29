import React, { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Index = ({ }) => {

  const [userInput, setUserInput] = useState('');
  const [randomIndex, setRandomIndex] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setUserInput(event.target.value);
  }

  const handleClick = () => {
    if (userInput) {
      setRandomIndex(Math.round(Math.random() * 20));
      setUserInput('');
    }
    else {
      MySwal.fire({
        title: 'Boş Bırkmayınız!',
        icon: 'error',
      })
    }
  }
  const erase = () => {
    setRandomIndex('');
  }
  const possibleAnswers = ["Çok şüpheli", "Konsantre ol ve tekrar sor", "Kesinlikle öyle", "Belirtiler olduğu yönde", "Gördüğüm Kadarıyla, evet", "Kaynaklarım hayır diyor", "Biraz belirsiz tekrar dene", "Kuşkusuz", "Bana güvenebilirsin", "Yanıtım hayır", "Dışarıdan iyi görünüyor", "Pek iyi görünmüyor", "Sonra tekrar dene", "Şimdi tahmin edemem", "Çoğunlukla", "Şimdi söylemesem daha iyi", "Kesinlikle", "Evet", "Evet, elbette", "Milyon yıl geçse bile hayır", "Hayır!"]

  const answer = possibleAnswers[randomIndex];

  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <div className='container flex justify-center items-center flex-col space-y-6'>
        <div className="md:w-8/12 md:h-[600px] w-11/12 flex items-center justify-center flex-col bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
          <div className={`flex flex-col items-center space-y-4 ${answer ? "" : "py-8"} `}>
            {
              answer ?
                <>
                  <div className="relative flex items-center">
                    <img width={567} src='/answerside.png' />
                    <p className='absolute text-white top-[38%] left-[45%] text-xs w-[11%] md:text-[80%] uppercase text-center flex items-center justify-center'>{answer}</p>
                  </div>
                </>
                :
                <>
                  <div><img className="w-48 rounded-full shadow-lg" src="/8ball.png" alt="Bonnie image" /></div>
                  <div><h5 className="text-xl font-medium text-gray-900 dark:text-white">Sihirli Top</h5></div>
                  <div><span className="text-sm text-gray-500 dark:text-gray-400">Kaderini Görmeye Hazırmısın?</span></div>
                  <div><input value={userInput} onChange={handleChange} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="O beni seviyor mu? ;)" required /></div>
                  <div><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-xs px-5 py-2.5 text-center mb-2" onClick={handleClick}>Topa Sor!</button></div>
                </>
            }
          </div>
        </div>
        {
          answer &&
          <div className='md:w-8/12 w-11/12 flex items-center justify-center flex-col rounded-lg  p-3 bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 '>
            <button onClick={erase} type="button" className="mb-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2">Tekrar Topa Sor!</button>
            <span className='text-gray-400 text-xs border-2 rounded p-1'><a className='text-red-400' href='https://www.umutk.codes'>Umut K.</a> & <a href="https://www.instagram.com/arrow_1566/" className='text-green-400'>Onur T.</a></span>
          </div>
        }
      </div>
    </div>
  );
}

export default Index;