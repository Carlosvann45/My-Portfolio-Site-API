import mongoose from 'mongoose';
import { Users } from '../models/users';
import Common from '../utils/common';

const loadDb = async () => {
  const username = process.env.USER_USERNAME as string;
  let password = process.env.USER_PASSWORD as string;

  try {
    const user = await Users.findOne({ username });
    const publicLinks = new Array<{ name: string; link: string }>();
    const summary =
      'Dedicated and enthusiastic professional, highly motivated and driven, with exceptional abilities in both team-based and independent work environments. Possessing a robust work ethic and superior organizational skills, I consistently bring efficiency and structure to any setting. Reliable and committed to delivering high-quality results, I have expertise in modernizing workplaces and maintaining high standards of organization. Resourceful and personable, I excel in multitasking and managing diverse responsibilities. I thrive on embracing new challenges and continuously enhancing my skill set. My adaptability and strong interpersonal skills enable me to effectively collaborate with colleagues and stakeholders, ensuring successful project outcomes. Adept at working independently, I quickly master new tasks and technologies, demonstrating a proactive approach to problem-solving and innovation. My dedication to professional growth and excellence makes me a valuable asset to any organization, eager to contribute to its success and development.';
    const city = 'Owings Mills';
    const state = 'MD';
    const zip = '21117';

    publicLinks.push({
      name: 'GitHub',
      link: 'https://github.com/Carlosvann45',
    });
    publicLinks.push({
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/carlos-santiago-b53967224/',
    });

    if (!user) {
      password = await Common.hashData(password);

      await Users.create({
        username,
        password,
        summary,
        city,
        state,
        zip,
        publicLinks,
      });
    }
  } catch (err) {
    console.log(`DB Error: ${err}`);
    process.exit(1);
  }

  console.log('Users Loaded');
};

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_URI as string);

    console.log(`MongoDB Connected ${connect.connection.host}`);
  } catch (err) {
    console.log(`DB Error: ${err}`);
    process.exit(1);
  }

  console.log('Loading db');

  await loadDb();
};

export default connectDb;
