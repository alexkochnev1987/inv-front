import PillowLink from '../../ui/PillowLink';
import Title from '@/components/ui/Title';
import Article from '@/components/ui/Article';

export default function Blog() {
  return (
    <section className='pt-[68px] pb-[38px] 
    md:pb-20 md:pt-[72px]
    lg:pt-[93px] lg:pb-20
    dark:bg-black dark:text-white'>
      <div className='container'>
        <div className='flex justify-between px-3.8 pb-10 items-center
        md:pb-15 lg:px-20 lg:pb-20'>
          <Title text='Блог invert' />

          <div className='flex'>
            <button
              className='button-pagination mr-[13px]'
              type='button'
              aria-label='Previous slide'
            >
              <svg className='w-[9px] h-[15px] viewBox="0 0 9 15'>
                <path
                  d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                  stroke='white'
                  strokeWidth='1.5'
                />
              </svg>
            </button>
            <button
              className='button-pagination'
              type='button'
              aria-label='Next slide'
            >
              <svg className='w-[9px] h-[15px] viewBox="0 0 9 15" rotate-180'>
                <path
                  d='M8.15625 14.1055L1.84046 7.39494L8.15625 0.684416'
                  stroke='white'
                  strokeWidth='1.5'
                />
              </svg>
            </button>
          </div>
        </div>

        <ul className='flex pl-3.8 overflow-hidden pb-7 gap-2.5
        md:pb-10 
        lg:pl-21 lg:gap-7 lg:pb-9'>
          <li className='w-[288px] md:w-[562px] shrink-0'>
            <Article
              link='/image/content/image-10.png'
              tag='VR'
              title='VR-футболка Owo: мнения тестеров'
              text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            />
          </li>

          <li className='w-[288px] md:w-[562px] shrink-0'>
            <Article
              link='/image/content/image-11.png'
              tag='3D'
              title='3D Max реально освоить самому'
              text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            />
          </li>

          <li className='w-[288px] md:w-[562px] shrink-0'>
            <Article
              link='/image/content/image-12.png'
              tag='Новости'
              title='Самый инновационный ноутбук от Apple — MacBook Retina'
              text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            />
          </li>

          <li className='w-[288px] md:w-[562px] shrink-0'>
            <Article
              link='/image/content/image-12.png'
              tag='Новости'
              title='Самый инновационный ноутбук от Apple — MacBook Retina'
              text='Футболка Owo дает ощутимую обратную связь в&nbsp;виртуальной
              реальности, как тактильный жилет, но&nbsp;с&nbsp;электрическим
              током до&nbsp;предела личной боли.'
            />
          </li>
        </ul>

        <div className='px-3.8 lg:pl-21'>
          <PillowLink text='Все новости' link='#' />
        </div>
      </div>
    </section>
  );
}
