import Image from 'next/image'
import EventImage from '../../../../../public/lib.jpg'
import { TAGS_LIST } from '@/entities/Tags/ui/TagsList/TagsList'

export function DetailedEventCard() {
  return (
    <>
      <div className="w-full h-64 relative ">
        <Image src={EventImage} alt="" className="object-cover" fill />
        <p className="absolute right-4 top-2 p-2 rounded-md backdrop-blur-sm bg-blur-dark">26 ноября 18:00</p>

        <div className="absolute bottom-2 left-4 flex gap-2">
          {TAGS_LIST.map((tag) => (
            <p key={tag.id} className="py-1.5 px-3 rounded bg-accent-purple">
              {tag.title}
            </p>
          ))}
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-bold pb-1">Книжный клуб</h1>
        <p className="font-normal pb-6">
          Обсуждение творчества Эдуарда Лимонова в «Skuratov Сoffee» за чашкой ароматного кофе.
        </p>

        <p className="font-bold pb-1">Адрес</p>
        <p className="font-normal pb-6">Skuratov coffee ул, Малая Конюшенная ул. 14</p>

        <p className="font-bold pb-1">Стоимость</p>
        <p className="font-normal pb-6">Бесплатно</p>

        {/* TODO сделать ссылку */}
        <p className="font-bold pb-1">Организатор</p>
        <div className="flex p-3.5 gap-3.5 items-center bg-accent-dark rounded-md">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image src={EventImage} alt="" className="object-cover" fill />
          </div>
          <div>
            <p>КНИГОЛЮБ_1337</p>
            <p>Организовал 13 событий</p>
          </div>
        </div>
      </div>
    </>
  )
}
