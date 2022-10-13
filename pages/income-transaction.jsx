import React from "react";
import Layout from "../components/layout";

export default function IncomeTransaction() {
  return (
    <Layout pageTitle='Income Transaction'>
      <div className='container max-6xl'>
        <h1 className='font-bold text-4xl my-10'>Income Transaction</h1>
        <table class='border-collapse border border-slate-500 w-full bg-white'>
          <thead className='bg-main'>
            <tr>
              <th class='border border-slate-600 ...'>State</th>
              <th class='border border-slate-600 ...'>City</th>
              <th class='border border-slate-600 ...'>City</th>
              <th class='border border-slate-600 ...'>City</th>
              <th class='border border-slate-600 ...'>City</th>
              <th class='border border-slate-600 ...'>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class='border border-slate-700 ...'>Indiana</td>
              <td class='border border-slate-700 ...'>Indianapolis</td>
              <td class='border border-slate-700 ...'>Indianapolis</td>
              <td class='border border-slate-700 ...'>Indianapolis</td>
              <td class='border border-slate-700 ...'>Indianapolis</td>
              <td class='border border-slate-700 ...'>Indianapolis</td>
            </tr>
            <tr>
              <td class='border border-slate-700 ...'>Ohio</td>
              <td class='border border-slate-700 ...'>Columbus</td>
              <td class='border border-slate-700 ...'>Columbus</td>
              <td class='border border-slate-700 ...'>Columbus</td>
              <td class='border border-slate-700 ...'>Columbus</td>
              <td class='border border-slate-700 ...'>Columbus</td>
            </tr>
            <tr>
              <td class='border border-slate-700 ...'>Michigan</td>
              <td class='border border-slate-700 ...'>Detroit</td>
              <td class='border border-slate-700 ...'>Detroit</td>
              <td class='border border-slate-700 ...'>Detroit</td>
              <td class='border border-slate-700 ...'>Detroit</td>
              <td class='border border-slate-700 ...'>Detroit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Layout>
  );
}
