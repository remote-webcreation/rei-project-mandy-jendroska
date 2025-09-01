import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="container mx-auto p-8 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        {/* Bildbereich */}
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <div className="relative w-64 h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/Team.jpg"
              alt="People interacting with bird feeders"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Textbereich */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Where the world's best birdcare begins
          </h2>
          <p className="text-lg text-gray-700">
            25 years ago we set out to bring more birds to more gardens. We
            wanted to feed them with better foods from safer, longer-lasting
            feeders. And we wanted to give them warm, secure homes to roost and
            raise a family.
          </p>
          <p className="text-lg text-gray-700">
            Together with our friends around the world we’ve created the best
            birdcare range you’ll find anywhere. Choose super-strong feeders
            that can be cleaned in an instant. Solve a big problem with the
            feeder that’s guaranteed 100% squirrel-proof. Offer quality nesting
            spaces that birds keep returning to year after year. Up the calorie
            count with honest, proven foods that boost birds’ energy levels and
            cut costly waste.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
