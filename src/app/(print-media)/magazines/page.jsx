import Link from "next/link";

const MAGAZINES_COUNT = 20;

export default function MagazinesPage() {
  function generateMagazines() {
    return Array.from({ length: MAGAZINES_COUNT }, (_, index) => {
      return (
        <>
          <li key={index}>
            <Link href={`/magazines/${index+1}`}>Magazine - {index+1 }</Link>
          </li>
        </>
      );
    });
  }

  return (
    <div>
      <h1>Magazines</h1>
        <ul>{generateMagazines()}</ul> 
    </div>
  );
}
