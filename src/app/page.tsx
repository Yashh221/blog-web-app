import Featured from '@/components/Featured/Featured'
import CardList from '@/components/cardList/CardList'
import CategoryList from '@/components/categoryList/CategoryList'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <div className='h-full'>
      <Featured/>
      <CategoryList/>
      <div className='flex flex-row'>
      <CardList/>
        <Menu/>
      </div>
    </div>
  )
}
