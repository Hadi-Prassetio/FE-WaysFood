import React from "react";
import Layout from "../components/layout";

export default function IncomeTransaction() {
  return (
    <Layout pageTitle='Income Transaction'>
      <div className='container max-6xl'>
        <h1 className='font-bold text-4xl my-10'>Income Transaction</h1>
        <table class='border-collapse border table-auto rounded border-slate-500 w-full bg-white'>
          <thead className='bg-gray-200'>
            <tr>
              <th class='border border-slate-600'>No</th>
              <th class='border border-slate-600'>Name</th>
              <th class='border border-slate-600'>Address</th>
              <th class='border border-slate-600'>Product Order</th>
              <th class='border border-slate-600'>Status</th>
              <th class='border border-slate-600'>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='border border-slate-700 pl-2'>1</td>
              <td class='border border-slate-700 pl-2'>Indianapolis</td>
              <td class='border border-slate-700 pl-2'>Jaksel</td>
              <td class='border border-slate-700 pl-2'>Ayam Paket Lengkap</td>
              <td class='border border-slate-700 pl-2'>Waiting Approve</td>
              <td class='border border-slate-700 pl-2'>Indianapolis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
