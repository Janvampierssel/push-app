import AddSlider from '@/components/AddSlider';
import Leaderboard from '@/components/Leaderboard';
import { Card } from '@/components/ui/card';
import { db } from '@/firebase-config';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

export default async function Page() {
  // const usersCollectionRef = collection(db, 'users');

  // const updateUsersUI = async () => {
  //   const q = query(usersCollectionRef, orderBy('pushUpsCurrentRound', 'desc'));
  //   const data = await getDocs(q);

  //   const users = data.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));

  //   return users;
  // };

  // const usersList = await updateUsersUI();

  return (
    <main className="flex-1 flex flex-col items-center justify-center h-full">
      <Card className="w-[800px] h-[500px] shadow-lg flex flex-col gap-8">
        <h2>The Batty Boy Challenge</h2>
        <section className="h-full w-full flex gap-8 ites-center md:flex-row flex-col">
          <div className="w-fit bg-white border border-[#EB670F] border-opacity-50 px-4 py-8 rounded-md shadow-md">
            <AddSlider />
          </div>
          <div className="w-full h-full flex flex-col justify-between items-center">
            <div className="w-full flex flex-col gap-2">
              <h3 className="mt-0">Leaderboard</h3>
              {/* <p>{JSON.stringify(usersList)}</p> */}
              {/* <Leaderboard usersList={usersList} /> */}
              <Leaderboard />
            </div>
            <p>Until December 14th</p>
          </div>
        </section>
      </Card>
    </main>
  );
}
