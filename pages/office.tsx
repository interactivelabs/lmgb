import React from 'react';
import MainLayout from '../components/MainLayout';

const Home = () => (
  <MainLayout>
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="md:w-1/2 lg:w-1/3">
        <p className="mt-3 text-2xl">OFFICE HOURS</p>
      </div>
    </main>
  </MainLayout>
);

export default Home;
