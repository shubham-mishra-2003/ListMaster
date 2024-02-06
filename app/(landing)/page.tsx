import * as React from "react";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const why = [
  [
    <span>
      <b>Simplicity Meets Power:</b> Experience a simple and intuitive design
      that doesn't compromise on powerful features.
    </span>,
  ],
  [
    <span>
      <b>Efficiency Redefined:</b> Maximize your productivity with features
      designed to save you time and effort.
    </span>,
  ],
  [
    <span>
      <b>Your Tasks, Your Rules:</b> Tailor ListMaster to your unique needs with
      customizable settings and smart functionalities.
    </span>,
  ],
];

const important = [
  [
    <span>
      <b>Effortless Task Management:</b> Seamlessly organize your tasks with a
      user-friendly interface designed for efficiency.
    </span>,
  ],
  [
    <span>
      <b>Intelligent Priority System:</b> Prioritize your tasks based on urgency
      and importance, ensuring you focus on what truly matters.
    </span>,
  ],
  [
    <span>
      <b>Secure Task Storage:</b> Your tasks are valuable; that's why ListMaster
      ensures they are stored securely with advanced encryption.
    </span>,
  ],
  [
    <span>
      <b>Collaborative Lists:</b> Collaborate with friends, family, or
      colleagues on shared lists, making teamwork a breeze.
    </span>,
  ],
  [
    <span>
      <b>Real-Time Sync:</b> Access your tasks from anywhere, at any time.
      ListMaster keeps your lists synchronized across all your devices.
    </span>,
  ],
];

const LandingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col mt-[80px] mb-4">
      <div className="flex-col mb-[5px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-pink-500 text-white px-6 p-4 rounded-3xl">
        <h1 className="mb-[5px] text-2xl md:text-6xl font-bold">
          Welcome to ListMaster
        </h1>
        <p className="text-sm md:text-xl">
          Your Gateway to Effortless Productivity
        </p>
      </div>
      <div className="flex items-center border shadow-sm md:p-4 p-2 md:text-xl sm:text-sm bg-violet-700 text-white rounded-full uppercase">
        <Medal className="h-6 w-6 mr-2" />
        No. 1 list manager
      </div>
      <div className="text-sm md:text-xl text-neutral-500 mt-5 max-w-xs md:max-w-2xl text-center mx-auto">
        <span className="font-bold text-neutral-700 text-lg">
          Unleash Your Productivity Potential
          <br />
        </span>
        ListMaster is not just a to-do list, its your personal productivity
        companion. Say goodbye to scattered tasks and welcome the era of
        organized achievement. With ListMaster, you have the power to master
        your lists, streamline your tasks, and conquer your goals.
      </div>

      <div className="flex items-center justify-center flex-col bg-blue-100 mt-3 p-4 text-md text-slate-600 rounded-3xl started ml-2 mr-2 text-center">
        Ready to take control of your tasks and elevate your productivity? Sign
        up now and embark on a journey towards efficient and organized living.
        <Link className="mt-8" href="/sign-up">
          <Button>Get Started With ListMaster</Button>
        </Link>
      </div>
      <div className="mt-3 flex-col md:flex-row p-3 flex items-center justify-center w-full">
        <div className="flex flex-col items-center justify-center w-full mb-9">
          <span className="text-3xl mb-3 text-start uppercase font-bold">
            Why list master ?
          </span>
          <Carousel className="w-[250px] md:w-full max-w-xs">
            <CarouselContent>
              {why.map((items, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg p-2 px-5">
                        <ul className="list-disc">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-3xl mb-3 text-start uppercase font-bold">
            Key features
          </span>
          <Carousel className="w-[250px] md:w-full max-w-xs">
            <CarouselContent>
              {important.map((items, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Card>
                      <CardContent className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-2 px-5 rounded-lg">
                        <ul className="list-disc">
                          {items.map((item, itemIndex) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
