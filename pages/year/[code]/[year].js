/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable eqeqeq */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-const-assign */
/* eslint-disable no-console */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar';

const months = [
  {
    month: 'January',
    code: '01',
  },
  {
    month: 'February',
    code: '02',
  },
  {
    month: 'March',
    code: '03',
  },
  {
    month: 'April',
    code: '04',
  },
  {
    month: 'May',
    code: '05',
  },
  {
    month: 'June',
    code: '06',
  },
  {
    month: 'July',
    code: '07',
  },
  {
    month: 'August',
    code: '08',
  },
  {
    month: 'September',
    code: '09',
  },
  {
    month: 'October',
    code: '10',
  },
  {
    month: 'November',
    code: '11',
  },
  {
    month: 'December',
    code: '12',
  },
];

const Post = () => {
  const router = useRouter();
  const { code } = router.query;
  const { year } = router.query;

  const [ayear, setAyear] = useState('');
  const [ryear, setRyear] = useState('');
  const [acode, setAcode] = useState('');

  useEffect(() => {
    if (router.isReady) {
      const category = code.split('.')[0];
      setAcode(category);
      console.log(year);
      console.log(code);
      console.log('yes we have both parameters');
      if (year == 0) {
        setAyear('2000');
        setRyear('00');
      } else {
        setAyear(`20${year}`);
        setRyear(year);
      }
    }
  }, [router]);

  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
        <div className="text-xl">
          {' '}
          Articles
          {' '}
          {code}
          {' '}
          for year
          {' '}
          {ayear}

        </div>

        <br />
        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Months</h3>
            <br />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {months.map((month) => (
                <div
                  key={month.month}
                  className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <div className="flex-1 min-w-0">
                    <a
                      href={`/list/${code}/${ryear + month.code}`}
                      className="focus:outline-none"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      <p className="text-sm font-medium text-gray-900 text-center">{month.month}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Post;