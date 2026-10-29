import Image from 'next/image'

export default function Container() {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1159px] flex-col gap-8">
        <Image
          src="/cont-final.png"
          alt="The complete structure, showing the roof, wall, and floor layers"
          width={1146}
          height={816}
          priority
          className="block h-auto w-full"
        />

        <Image
          src="/cont-split.png"
          alt="Inside the structure, showing the steel frame, wall panels, moisture barrier, insulation, GI sheet, and external cladding"
          width={1159}
          height={631}
          className="block h-auto w-full"
        />
      </div>
    </section>
  )
}