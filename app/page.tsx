import VestiDanas from './vesti/page'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Istok Info Pult',
  description: 'Najnovije vesti dana, slike i članci na jednom mestu.',
}

export default function Početna() {
  return (
    <main>
      <section className="mt-6 px-4 sm:px-6">
        <div className="w-full max-w-[760px] lg:max-w-[800px]">
          <div className="overflow-hidden rounded-3xl border border-yellow-500/40 bg-black/65 shadow-[0_0_30px_rgba(234,179,8,0.12)] backdrop-blur-md">
            <div className="px-6 py-8 sm:px-8 sm:py-10 md:px-10">
              <div className="text-center">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-300/90 sm:text-sm">
                  Građanska inicijativa
                </p>

                <h2 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl">
                  Podržite inicijativu za podizanje spomenika
                </h2>

                <div className="mx-auto my-5 h-px w-24 bg-yellow-400/40" />

                <p className="mx-auto max-w-2xl text-base font-medium leading-7 text-yellow-300 drop-shadow-[0_0_6px_rgba(234,179,8,0.35)] sm:text-lg">
                  Pozivamo građane, prijatelje i sve ljude dobre volje da svojim
                  potpisom podrže inicijativu za podizanje spomenika žrtvama.
                  Potpisivanje traje manje od jednog minuta.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href="https://tally.so/r/rjL71v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl bg-yellow-500 px-7 py-3.5 text-base font-bold text-black transition hover:bg-yellow-400"
                  >
                    Potpiši peticiju
                  </a>

                  <a
                    href="/peticija"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-2xl border border-yellow-500/40 bg-white/5 px-7 py-3.5 text-base font-semibold text-white transition hover:bg-white/10"
                  >
                    Saznaj više
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VestiDanas />
    </main>
  )
}
