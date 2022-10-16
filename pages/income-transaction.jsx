import React from "react";
import Layout from "../components/layout";
import Income from "../fakeData/income";
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
              <tr>
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
                <th scope='col' className='py-3 px-6 text-center'>
                  Action
                </th>
              </tr>
            </thead>
            {Income.map((item, index) => (
              <tbody key={index}>
                <tr className='border-b bg-white'>
                  <td className='py-4 px-6'>{index + 1}</td>
                  <td
                    scope='row'
                    className='py-4 px-6 font-medium whitespace-nowrap'>
                    {item.name}
                  </td>
                  <td className='py-4 px-6'>{item.address}</td>
                  <td className='py-4 px-6'>{item.products?.menu}</td>
                  <td
                    className={
                      item.status === "Waiting Approve"
                        ? "py-4 px-6 text-yellow-600"
                        : item.status === "On The Way"
                        ? "py-4 px-6 text-blue-600"
                        : item.status === "Success"
                        ? "py-4 px-6 text-green-600"
                        : item.status === "Cancel"
                        ? "py-4 px-6 text-red-600"
                        : ""
                    }>
                    {item.status}
                  </td>
                  <td className='py-4 px-6 flex justify-center'>
                    <button className='bg-red-500 rounded-sm mr-2 text-white px-3 hover:bg-red-400 active:bg-red-600'>
                      Cancel
                    </button>
                    <button className='bg-green-500 rounded-sm text-white px-3 hover:bg-green-400 active:bg-green-600'>
                      Approve
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </Layout>
  );
}
