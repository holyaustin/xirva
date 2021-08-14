/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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
import { router, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';

const actions = [
  {
    year: '2000',
    code: '0',
  },
  {
    year: '2001',
    code: '01',
  },
  {
    year: '2002',
    code: '02',
  },
  {
    year: '2003',
    code: '03',
  },
  {
    year: '2004',
    code: '04',
  },
  {
    year: '2005',
    code: '05',
  },
  {
    year: '2006',
    code: '06',
  },
  {
    year: '2007',
    code: '07',
  },
  {
    year: '2008',
    code: '08',
  },
  {
    year: '2009',
    code: '09',
  },
  {
    year: '2010',
    code: '10',
  },
  {
    year: '2011',
    code: '11',
  },
  {
    year: '2012',
    code: '12',
  },
  {
    year: '2013',
    code: '13',
  },
  {
    year: '2014',
    code: '14',
  },
  {
    year: '2015',
    code: '15',
  },
  {
    year: '2016',
    code: '16',
  },
  {
    year: '2017',
    code: '17',
  },
  {
    year: '2018',
    code: '18',
  },
  {
    year: '2019',
    code: '19',
  },
  {
    year: '2020',
    code: '20',
  },
  {
    year: '2021',
    code: '21',
  },

];

const Post = () => {
  const router1 = useRouter();
  const { code } = router1.query;
  const [desc, setDesc] = useState('Desc');
  const [name, setName] = useState('Name');
  const [ref, setRef] = useState('');
  const [first, setFirst] = useState(false);

  useEffect(() => {
    if (router1.isReady && !first) {
      console.log('and this?', code);
      setFirst(true);
      setRef(code);
      const category = code.split('.')[0];
      const filepath = `${category}.js`;
      const docs = require(`routes/${filepath}`);
      docs.default.forEach((doc) => {
        if (doc.code.trim() == code) {
          setDesc(doc.desc);
          setName(doc.name);
        }
      });
    }
  }, [router1]);

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
        <br />
        <br />
        <br />

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Welcome to
              {' '}
              {name}
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              {desc}
            </div>
            <div className="mt-5" />
          </div>
        </div>
        <br />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-8">
          {actions.map((person) => (
            <div
              key={person.year}
              className="relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex space-x-3 hover:border-gray-600 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
            >
              <div className="flex-0 min-w-0">
                <a
                  className="focus:outline-none text-center"
                  onClick={() => { router.push(`/year/${ref}/${person.code}`); }}
                >

                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="text-md font-medium text-gray-900 text-center">{person.year}</p>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default Post;
