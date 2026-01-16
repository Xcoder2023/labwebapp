import Container from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import TestCard from "@/components/TestCard";
import { tests } from "@/data/tests";

export default function ServicesPage() {
  return (
    <section
      className="py-20 bg-gray-50"
      style={{
        backgroundImage: "url('/images/lab-services.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <SectionHeader title="Laboratory Tests" />

        <div className="flex flex-col gap-6">
          <div className="grid md:grid-cols-3 gap-8">
            {tests.map((test) => (
              <TestCard key={test.id} {...test} />
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tests.map((test) => (
              <TestCard key={test.id} {...test} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
