import HeroSection from '@/components/home/HeroSection'
import PersonalizedSection from '@/components/home/PersonalizedSection'
import CategoriesGrid from '@/components/home/CategoriesGrid'
import TrendingSection from '@/components/home/TrendingSection'
import DealsSection from '@/components/home/DealsSection'

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <PersonalizedSection />
      <CategoriesGrid />
      <TrendingSection />
      <DealsSection />
    </div>
  )
}

