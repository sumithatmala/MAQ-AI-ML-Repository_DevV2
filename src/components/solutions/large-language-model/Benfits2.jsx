import React from "react";
import './css/Benfits2.css'
import icon_dollar_increase from './img/icon-dollar-increase.svg'
import icon_cost from './img/icon-cost-2.svg'
import icon_accuracy from './img/icon-accuracy-2.svg'
import icon_engine from './img/icon-engine.svg'
const Benfits2 = () => {
  return (
    <section class="main-cases">
      <h2 class="head-block-center w-800">
        Seize the Distinctive Benefits of Large Language Learning Models
      </h2>
      <div class="text-block-center">
        We help you get your arms around the value of LLMs in corporate
        settings.
      </div>
      <div class="use-cases __type-predict">
        <div class="use-cases__outer">
          <div class="use-cases__inner">
            <div class="use-cases-list-wrapper __type-predict">
              <ul class="use-cases-list">
                
                <li class="use-cases-list__list-item">
                  <div class="use-cases-list__item">
                    <div class="use-cases-list__icon">
                      
                      <img
                        src={icon_dollar_increase}
                        alt="dollar increase"
                      />
                    </div>
                    <h3 class="use-cases-list__title">Increase Revenue</h3>
                    <div class="use-cases-list__text">
                      
                      Make your customers feel heard and increase sales with the
                      unlimited potential of LLMs. Custom-built AI software
                      streamlines customer support, generates tailored
                      recommendations, and analyzes your customers, while
                      you can focus on growing your business.
                    </div>
                  </div>
                </li>
                <li class="use-cases-list__list-item">
                  <div class="use-cases-list__item">
                    <div class="use-cases-list__icon">
                      
                      <img
                        src={icon_cost}
                        alt="Reduced Costs"
                      />
                    </div>
                    <h3 class="use-cases-list__title">
                      Reduce Operational Costs
                    </h3>
                    <div class="use-cases-list__text">
                      
                      Cut costs by automating tasks that require human labor.
                      From customer experience services to admin tasks, our custom LLM solutions do the heavy
                      lifting of business management and optimize your
                      operations across sales, marketing, customer service,
                      and more.
                    </div>
                  </div>
                </li>
                <li class="use-cases-list__list-item">
                  <div class="use-cases-list__item">
                    <div class="use-cases-list__icon">
                      
                      <img
                        src={icon_accuracy}
                        alt="Improved Visibility"
                      />
                    </div>
                    <h3 class="use-cases-list__title">
                      Find Growth Opportunities
                    </h3>
                    <div class="use-cases-list__text"> 
                      From sentiment analysis to upselling, a custom large language model unlocks
                      novel use cases for your business based on real-time
                      conversation data. LLMs cast their nets wide to customer
                      data, external market trends, and social media data to
                      power your decision-making.
                    </div>
                  </div> 
                </li> 
                <li class="use-cases-list__list-item">
                  <div class="use-cases-list__item">
                    <div class="use-cases-list__icon"> 
                      <img
                        src={icon_engine}
                        alt="recommendation engine"
                      />
                    </div>
                    <h3 class="use-cases-list__title">
                      Strengthen Your Tech Core
                    </h3>
                    <div class="use-cases-list__text">
                      
                      Embed Large Language Learning Models into your
                      applications to ramp up their throughput and enable
                      conversational search. <br />
                      With LLMs, you can request specific outputs from
                      applications, make the most out of your data, and keep up
                      with increasing workloads.
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benfits2;
