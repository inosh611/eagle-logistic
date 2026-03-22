import TradeHero         from '../components/trade/TradeHero/TradeHero'
import TradeIntro        from '../components/trade/TradeIntro/TradeIntro'
import ConsultationServices from '../components/trade/ConsultationServices/ConsultationServices'
import FCLLCLSection     from '../components/trade/FCLLCLSection/FCLLCLSection'
import WhyChooseUs       from '../components/trade/WhyChooseUs/WhyChooseUs'
import TradeCTA          from '../components/trade/TradeCTA/TradeCTA'

function TradeConsultationPage() {
  return (
    <main>
      <TradeHero />
      <TradeIntro />
      <ConsultationServices />
      <FCLLCLSection />
      <WhyChooseUs />
      <TradeCTA />
    </main>
  )
}

export default TradeConsultationPage