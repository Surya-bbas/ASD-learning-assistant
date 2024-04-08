"use client";
import Image from "next/image";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useCallback, useEffect, useState } from "react";
import { useUserLoginStore } from "./globalState";
import { useRouter } from "next/navigation";
import {
   getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   onAuthStateChanged,
   signOut,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
} from "firebase/auth";
import { initializeApp } from "firebase/app";

export default function Home() {
   const firebaseConfig = {
      apiKey: "AIzaSyAaP6jyNYQfbYEum1NsvRc9HLAGSJPawU4",
      authDomain: "final-year-asd-project.firebaseapp.com",
      projectId: "final-year-asd-project",
      storageBucket: "final-year-asd-project.appspot.com",
      messagingSenderId: "445141611612",
      appId: "1:445141611612:web:b497a5e3a2d77193502299",
   };
   const app = initializeApp(firebaseConfig);
   const auth = getAuth();
   const provider = new GoogleAuthProvider();

   //Global State
   const user = useUserLoginStore((state) => state.user);
   const updateUser = useUserLoginStore((state) => state.updateUser);

   // State
   const [newRegister, setNewRegister] = useState(false);
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [regEmail, setRegEmail] = useState("");
   const [regPassword, setRegPassword] = useState("");

   //Router
   const router = useRouter();
   
   const pushToHome = () => {
    router.push("/home");
   }
   //useEffect
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         updateUser(user?.email);
         console.log(user);
      });
   }, []);

   return (
      <>
         <div className="flex justify-center items-center min-h-screen bg-gray-50">
            <div>
               <button
                  onClick={() => {
                     signOut(auth);
                  }}
               >
                  SignOut
               </button>

               {newRegister ? (
                  <section class="bg-gray-50 dark:bg-gray-900">
                     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 flex lg:grid-cols-2 gap-8 lg:gap-16 justify-center items-center">
                        <div>
                           <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                                 <span className="text-blue-700">Sign up</span>{" "}
                                 to Learning assistant
                              </h2>
                              <form class="mt-8 space-y-6" action="#">
                                 <div>
                                    <label
                                       for="email"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       Your email
                                    </label>
                                    <input
                                       type="email"
                                       name="email"
                                       id="email"
                                       value={regEmail}
                                       onChange={(e) => {
                                          setRegEmail(e.target.value);
                                       }}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com"
                                       required
                                    />
                                 </div>
                                 <div>
                                    <label
                                       for="password"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       Your password
                                    </label>
                                    <input
                                       type="password"
                                       name="password"
                                       id="password"
                                       placeholder="••••••••"
                                       value={regPassword}
                                       onChange={(e) => {
                                          setRegPassword(e.target.value);
                                       }}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required
                                    />
                                 </div>
                                 <button
                                    type="submit"
                                    class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => {
                                       createUserWithEmailAndPassword(
                                          auth,
                                          regEmail,
                                          regPassword
                                       ).then(() => {
                                        pushToHome();
                                       });
                                    }}
                                 >
                                    Register New accout
                                 </button>
                                 <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    Already have an accout?{" "}
                                    <a
                                       class="text-blue-600 hover:underline dark:text-blue-500"
                                       onClick={() => {
                                          setNewRegister(false);
                                       }}
                                    >
                                       Login to that account
                                    </a>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </section>
               ) : (
                  <section class="bg-gray-50 dark:bg-gray-900">
                     <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                        <div class="flex flex-col justify-center">
                           <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                              We invest in the world’s potential
                           </h1>
                           <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                              Here at Flowbite we focus on markets where
                              technology, innovation, and capital can unlock
                              long-term value and drive economic growth.
                           </p>
                           <a
                              href="#"
                              class="text-blue-600 dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                           >
                              Read more about ASD
                              <svg
                                 class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                 aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 14 10"
                              >
                                 <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                 />
                              </svg>
                           </a>
                        </div>
                        <div>
                           <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                              <h2 class="text-2xl font-bold text-gray-900 dark:text-white">
                                 <span className="text-blue-700">Sign in</span>{" "}
                                 to Learning assistant
                              </h2>
                              <form class="mt-8 space-y-6" action="#">
                                 <div>
                                    <label
                                       for="email"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       Your email
                                    </label>
                                    <input
                                       type="email"
                                       name="email"
                                       id="email"
                                       value={email}
                                       onChange={(e) => {
                                          setEmail(e.target.value);
                                       }}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       placeholder="name@company.com"
                                       required
                                    />
                                 </div>
                                 <div>
                                    <label
                                       for="password"
                                       class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                       Your password
                                    </label>
                                    <input
                                       type="password"
                                       name="password"
                                       id="password"
                                       placeholder="••••••••"
                                       value={password}
                                       onChange={(e) => {
                                          setPassword(e.target.value);
                                       }}
                                       class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                       required
                                    />
                                 </div>

                                 <div className="flex justify-start items-center gap-4">

                                  <button
                                      type="submit"
                                      class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                      onClick={() => {
                                        signInWithEmailAndPassword(
                                            auth,
                                            email,
                                            password
                                        ).then(() => {
                                            pushToHome();
                                           });
                                      }}
                                  >
                                      Login to your account
                                  </button>

                                  <button
                                      
                                      onClick={() => {
                                        signInWithPopup(auth, provider).then(() => {
                                            pushToHome();
                                           })
                                      }}
                                  >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        x="0px"
                                        y="0px"
                                        width="42"
                                        height="42"
                                        viewBox="0 0 48 48"
                                      >
                                        <path
                                            fill="#FFC107"
                                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                        <path
                                            fill="#FF3D00"
                                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                                        ></path>
                                        <path
                                            fill="#4CAF50"
                                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                                        ></path>
                                        <path
                                            fill="#1976D2"
                                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                                        ></path>
                                      </svg>
                                  </button>
                                 </div>
                                 <div class="text-sm font-medium text-gray-900 dark:text-white">
                                    Not registered yet?{" "}
                                    <a
                                       class="text-blue-600 hover:underline dark:text-blue-500"
                                       onClick={() => {
                                          setNewRegister(true);
                                       }}
                                    >
                                       Create account
                                    </a>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </section>
               )}

               <p>{user}</p>
            </div>
         </div>
      </>
   );
}
