import Featured from '@/components/Featured/Featured'
import CardList from '@/components/cardList/CardList'
import CategoryList from '@/components/categoryList/CategoryList'
import Menu from '@/components/menu/Menu'

export default function Home() {
  return (
    <div className=''>
      <Featured/>
      <CategoryList/>
      <div>
        <Menu/>
      <CardList/>
      </div>
    </div>
  )
}
