import React from "react";
import Layout from "../components/layout";

export default function IncomeTransaction() {
  return (
    <Layout pageTitle='Income Transaction'>
      <div className='px-40 py-10'>
        <p className='font-bold text-4xl mb-10 font-header'>
          Income Transaction
        </p>
        <div className='overflow-x-auto'>
          <table className='w-full text-sm text-left text-gray-500'>
            <thead className='text-md text-gray-700 bg-gray-100'>
              <tr className=''>
                <th scope='col' className='py-3 px-6'>
                  No
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Address
                </th>
                <th scope='col' className='py-3 px-6'>
                  Products Order
                </th>
                <th scope='col' className='py-3 px-6'>
                  Status
                </th>
                <th scope='col' className='py-3 px-6'>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b bg-white'>
                <td className='py-4 px-6'>1</td>
                <th
                  scope='row'
                  className='py-4 px-6 font-medium text-gray-900 whitespace-nowrap'>
                  Sugeng No Pants
                </th>
                <td className='py-4 px-6'>Cileungsi</td>
                <td className='py-4 px-6'>Paket Geprek, Paket Geprek</td>
                <td className='py-4 px-6'>Waiting Approve</td>
                <td className='py-4 px-6'>Waiting Approve</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
