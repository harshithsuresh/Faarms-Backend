import { useEffect, useState } from 'react';
import 'aos/dist/aos.css';
import axios from 'axios';
import AOS from 'aos';
import Skeleton from 'react-loading-skeleton';
import ErrorText from '../components/ErrorText';

const ViewStudentTable = (props) => {
  const [studentList, setStudentList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortType, setSortType] = useState('firstName');

  useEffect(() => {
    const fetchedStudentList = async () => {
      if (loading) {
        try {
          const { data } = await axios.get(
            `http://127.0.0.1:8000/api/getStudentList?sorting=${sortType}`
          );
          setStudentList(data);
          setLoading(false);
        } catch (err) {
          setLoading(false);
          setError(true);
        }
      }
    };
    fetchedStudentList();
  }, [studentList, sortType, loading]);

  useEffect(() => {
    setLoading(true);
  }, [sortType]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="mt-10">
          <Skeleton count={6} className="h-20" />
        </div>
      ) : error ? (
        <ErrorText
          text="Error Loading the Student List. Please try again later"
          color="danger"
        />
      ) : (
        <div className="flex flex-col mt-5">
          <div className="text-primary font-bold ml-2 p-2">
            SortBy:
            <div>
              <select
                className="p-2 m-2 border rounded"
                value={sortType}
                onChange={(e) => setSortType(e.target.value)}
              >
                <option value="firstName">First Name (asc)</option>
                <option value="-firstName">First Name (desc)</option>
                <option value="dateOfAdmission">
                  Date of Registration (asc)
                </option>
                <option value="-dateOfAdmission">
                  Date of Registration (desc)
                </option>
              </select>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <div className="align-middle inline-block min-w-full shadow-2xl">
              <div className="shadow overflow-hidden border border-primary rounded-lg ">
                <table className="w-full divide-y divide-gray-200 ">
                  <thead className="bg-onSurface text-sm ">
                    <tr className="font-medium uppercase tracking-wider text-left text-md text-primary">
                      <th scope="col" className="px-6 py-3">
                        ID
                      </th>

                      <th scope="col" className="px-0 lg:px-6 py-3">
                        <div className="hidden lg:block">First Name</div>
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        Last Name
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        Gender
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        Date of Registration
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        Created Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-background text-primary">
                    {studentList.map((item) => (
                      <tr
                        key={item.ID}
                        className="hover:shadow-2xl"
                        data-aos="fade-left"
                        data-aos-offset="30"
                        data-aos-delay="50"
                        data-aos-duration="500"
                        data-aos-easing="ease-in-out"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="font-medium ">{item.ID}</div>
                              <div className="">{item.registrationNumber}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-0 lg:px-6 py-4 whitespace-nowrap">
                          <div className="block ">{item.firstName}</div>
                        </td>
                        <td className="px-0 lg:px-6 py-4 whitespace-nowrap">
                          <div className="block ">{item.lastName}</div>
                        </td>
                        <td className="px-0 lg:px-6 py-4 whitespace-nowrap">
                          <div className="block ">{item.gender}</div>
                        </td>
                        <td className="px-0 lg:px-6 py-4 whitespace-nowrap">
                          <div className="block ">{item.dateOfAdmission}</div>
                        </td>
                        <td className="px-0 lg:px-6 py-4 whitespace-nowrap">
                          <div className="block ">{item.createdData}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStudentTable;
