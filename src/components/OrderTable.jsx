import React from "react";
import pic1 from "../assets/images/profile/pic1.png";
import pic2 from "../assets/images/profile/pic2.jpg";
import pic3 from "../assets/images/profile/pic3.png";
import pic4 from "../assets/images/profile/pic4.jpg";
import pic5 from "../assets/images/profile/pic5.jpg";
import pic6 from "../assets/images/profile/pic6.jpg";
const users = [
  {
    name: "Wade Warren",
    order: "478596123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "green",
    imgSrc: pic1,
  },
  {
    name: "Neil Sims",
    order: "456986123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "green",
    imgSrc: pic2,
  },
  {
    name: "Jane Cooper",
    order: "145266123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "red",
    imgSrc: pic3,
  },
  {
    name: "Cody Fisher",
    order: "356846123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "red",
    imgSrc: pic4,
  },
  {
    name: "John Ilin",
    order: "235686123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "green",
    imgSrc: pic5,
  },
  {
    name: "Milin Giris",
    order: "128296123",
    amount: "$124.00",
    status: "Delivered",
    statusColor: "green",
    imgSrc: pic6,
  },
];

const OrderTable = () => {
  return (
    <div className="bg-[#292b40] rounded-md h-auto w-full p-4 flex flex-col">
      <div className="flex w-full justify-between mb-2">
        <h3 className="text-lg font-semibold">Recent Orders</h3>
      </div>
      {/* //////////////////TABLE////////////////// */}
      <div className="relative overflow-x-auto sm:rounded-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs uppercase bg-[#292b40] text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer
              </th>
              <th scope="col" className="px-6 py-3">
                Order No.
              </th>
              <th scope="col" className="px-6 py-3">
                Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr
                key={index}
                className=" border-b bg-[#292b40] dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-neutral-400"
              >
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <img
                    className="w-10 h-10 rounded-full"
                    src={user.imgSrc}
                    alt={`${user.name} image`}
                  />
                  <div className="ps-3">
                    <div className="text-base font-semibold">{user.name}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{user.order}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">{user.amount}</div>
                </td>
                <td className="px-2 py-4">
                  {user.statusColor === "green" ? (
                    <button
                      href="#"
                      className="text-green-400 bg-green-900 px-5 py-1 rounded-2xl font-medium  hover:underline"
                    >
                      Delivered
                    </button>
                  ) : (
                    <button
                      href="#"
                      className="text-red-400 bg-red-900 px-5 py-1 rounded-2xl font-medium  hover:underline"
                    >
                      Cancelled
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;
