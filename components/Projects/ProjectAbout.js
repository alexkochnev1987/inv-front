import Line from '../ui/Line';
import Title from '../ui/Title';
import IntroDescription from '../ui/IntroDescription';
import Link from 'next/link';

export default function ProjectAbout() {
  return (
    <div className='lg:flex flex-wrap lg:container lg:mx-auto'>
      <div className='flex container pb-10 lg:w-1/2'>
        <span className='text-royal-blue text-4xl tracking-tight mr-2'>/</span>
        <Title text='О проекте ' />
      </div>
      <div className='lg:w-1/2 container'>
        <Line variantColor='grey' />
        <IntroDescription
          title='Задача'
          text='Задача 3D ролика презентация ряда преимуществ жилого комплекса, общий внешний вид дворов и фасадов зданий.'
        />
      </div>

      <div className='lg:w-1/2 lg:order-3 container'>
        <Line variantColor='grey' />
        <IntroDescription
          title='Что сделали '
          text='Студия INVERT выполнила сложную задачу по анимации персонажей главных героев и 3D моделированию зданий и придворовых территорий, ряда интерьеров с дальнейшим их визуализацией.'
        />
      </div>

      <div className='container lg:w-1/2'>
        <p className='uppercase opacity-40'>Заказчик</p>
        <p>MiKA visual kommunikations </p>
        <Link href='#'>http://mika.group/</Link>
      </div>

    </div>

  )
}