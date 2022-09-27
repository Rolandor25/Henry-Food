import '../../layout.css'

//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW
// REFERECIA DE DIETAS Y DATOS DE SALUD
//MWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWMWWMWWMWMWMW

export default function DietsReference (){
  return(
    <div className="conteiner">

      <header className='header'>
      </header>      
    
      <main className="conteiner__main">
        {/*<!-- Left sidebar -->*/}
        <aside className="conteiner__left"></aside>

        {/*<!-- Main content -->*/}
        <article>
            <div className="conteiner__middle_h">
                <div className="content_card_d">
                    <h1 className='conteiner_tittleform' align="center">Diets And Health Recomendation</h1>
                    <div className='conteiner__colLft'>
                        <h2><strong>Diet Definitions </strong> </h2>
                        <p>Below we show the meaning and description of the different types of diets.</p>

                        <div><img src='https://spoonacular.com/application/frontend/images/academy/diet-infographic.png' alt="" height={300} width={450}/></div>

                        <p><strong>Gluten Free</strong></p>
                        <p>Eliminating gluten means avoiding whealth, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).</p>
                        <p><strong>Ketogenic</strong></p>
                        <p>The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.</p>
                        <p><strong>Vegetarian</strong></p>
                        <p>No ingredients may contain meat or meat by-products, such as bones or gelatin.</p>
                        <p><strong>Lacto-Vegetarian</strong></p>
                        <p>All ingredients must be vegetarian and none of the ingredients can be or contain egg.</p>
                        <p><strong>Ovo-Vegetarian</strong></p>
                        <p>All ingredients must be vegetarian and none of the ingredients can be or contain dairy.</p>
                        <p><strong>Vegan</strong></p>
                        <p>No ingredients may contain meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.</p>
                        <p><strong>Pescetarian</strong></p>
                        <p>Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.</p>
                        <p><strong>Paleo</strong></p>
                        <p>Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.</p>
                        <p><strong>Primal</strong></p>
                        <p>Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.</p>
                        <p><strong>Low FODMAP</strong></p>
                        <p>FODMAP stands for "fermentable oligo-, di-, mono-saccharides and polyols". Our ontology knows which foods are considered high in these types of carbohydrates (e.g. legumes, whealth, and dairy products)</p>
                        <p><strong>Whole30</strong></p>
                        <p>Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.</p>
    
                    </div>
                    
                    <div className='conteiner__colRgt'>
                        <h1>Healthy diet</h1>
                        <h2>Key facts</h2>
                        <ul type="disc">
                        <li><strong>A healthy diet helps to protect against malnutrition in all its forms, as well as noncommunicable diseases (NCDs), including such as diabetes, heart disease, stroke and cancer.</strong></li>
                        <li><strong>Unhealthy diet and lack of physical activity are leading global risks to health.</strong></li>
                        <li><strong>Healthy dietary practices start early in life &ndash; breastfeeding fosters healthy growth and improves cognitive development, and may have longer term health benefits such as reducing the risk of becoming overweight or obese and developing NCDs later in life.</strong></li>
                        <li><strong>Energy intake (calories) should be in balance with energy expenditure. To avoid unhealthy weight gain, total fat should not exceed 30% of total energy intake (1, 2, 3). Intake of saturated fats should be less than 10% of total energy intake, and intake of trans-fats less than 1% of total energy intake, with a shift in fat consumption away from saturated fats and trans-fats to unsaturated fats (3), and towards the goal of eliminating industrially-produced trans-fats (4, 5, 6).</strong></li>
                        <li><strong>Limiting intake of free sugars to less than 10% of total energy intake (2, 7) is part of a healthy diet. A further reduction to less than 5% of total energy intake is suggested for additional health benefits (7).</strong></li>
                        <li><strong>Keeping salt intake to less than 5 g per day (equivalent to sodium intake of less than 2 g per day) helps to prevent hypertension, and reduces the risk of heart disease and stroke in the adult population (8).</strong></li>
                        <li><strong>WHO Member States have agreed to reduce the global population&rsquo;s intake of salt by 30% by 2025; they have also agreed to halt the rise in diabetes and obesity in adults and adolescents as well as in childhood overweight by 2025 (9, 10).</strong></li>
                        </ul>
                        <h3><strong>Overview</strong></h3>
                        <p>Consuming a healthy diet throughout the life-course helps to prevent malnutrition in all its forms as well as a range of noncommunicable diseases (NCDs) and conditions. However, increased production of processed foods, rapid urbanization and changing lifestyles have led to a shift in dietary patterns. People are now consuming more foods high in energy, fats, free sugars and salt/sodium, and many people do not eat enough fruit, vegetables and other dietary fibre such as whole grains.</p>
                        <p>The exact make-up of a diversified, balanced and healthy diet will vary depending on individual characteristics (e.g. age, gender, lifestyle and degree of physical activity), cultural context, locally available foods and dietary customs. However, the basic principles of what constitutes a healthy diet remain the same.</p>
                        <h3>For adults</h3>
                        <p>A healthy diet includes the following:</p>
                        <ul type="disc">
                        <li>Fruit, vegetables, legumes (e.g. lentils and beans), nuts and whole grains (e.g. unprocessed maize, millet, oats, whealth and brown rice).</li>
                        <li>At least 400&nbsp;g (i.e. five portions) of fruit and vegetables per day&nbsp;<em>(2)</em>, excluding potatoes, sweet potatoes, cassava and other starchy roots.</li>
                        <li>Less than 10% of total energy intake from free sugars&nbsp;<em>(2, 7)</em>, which is equivalent to 50&nbsp;g (or about 12 level teaspoons) for a person of healthy body weight consuming about 2000 calories per day, but ideally is less than 5% of total energy intake for additional health benefits&nbsp;<em>(7)</em>. Free sugars are all sugars added to foods or drinks by the manufacturer, cook or consumer, as well as sugars naturally present in honey, syrups, fruit juices and fruit juice concentrates.</li>
                        <li>Less than 30% of total energy intake from fats&nbsp;<em>(1, 2, 3)</em>. Unsaturated fats (found in fish, avocado and nuts, and in sunflower, soybean, canola and olive oils) are preferable to saturated fats (found in fatty meat, butter, palm and coconut oil, cream, cheese, ghee and lard) and&nbsp;<em>trans-</em>fats of all kinds, including both industrially-produced&nbsp;<em>trans-</em>fats (found in baked and fried foods, and pre-packaged snacks and foods, such as frozen pizza, pies, cookies, biscuits, wafers, and cooking oils and spreads) and ruminant&nbsp;<em>trans-</em>fats (found in meat and dairy foods from ruminant animals, such as cows, sheep, goats and camels). It is suggested that the intake of saturated fats be reduced to less than 10% of total energy intake and&nbsp;<em>trans-</em>fats to less than 1% of total energy intake&nbsp;<em>(5)</em>. In particular, industrially-produced&nbsp;<em>trans</em>-fats are not part of a healthy diet and should be avoided&nbsp;<em>(4, 6)</em>.</li>
                        <li>Less than 5&nbsp; g of salt (equivalent to about one teaspoon) per day&nbsp;<em>(8).&nbsp;</em>&nbsp;Salt should be iodized.</li>
                        </ul>
                        <h3>For infants and young children</h3>
                        <p>In the first 2 years of a child&rsquo;s life, optimal nutrition fosters healthy growth and improves cognitive development. It also reduces the risk of becoming overweight or obese and developing NCDs later in life.</p>
                        <p>Advice on a healthy diet for infants and children is similar to that for adults, but the following elements are also important:</p>
                        <ul type="disc">
                        <li>Infants should be breastfed exclusively during the first 6 months of life.</li>
                        <li>Infants should be breastfed continuously until 2 years of age and beyond.</li>
                        <li>From 6 months of age, breast milk should be complemented with a variety of adequate, safe and nutrient-dense foods. Salt and sugars should not be added to complementary foods.</li>
                        </ul>
                        <h2>Practical advice on maintaining a healthy diet</h2>
                        <h3>Fruit and vegetables</h3>
                        <p>Eating at least 400&nbsp;g, or five portions, of fruit and vegetables per day reduces the risk of NCDs&nbsp;<em>(2)</em>&nbsp;and helps to ensure an adequate daily intake of dietary fibre.</p>
                        <p>Fruit and vegetable intake can be improved by:</p>
                        <ul type="disc">
                        <li>always including vegetables in meals;</li>
                        <li>eating fresh fruit and raw vegetables as snacks;</li>
                        <li>eating fresh fruit and vegetables that are in season; and</li>
                        <li>eating a variety of fruit and vegetables.</li>
                        </ul>
                        <h3>Fats</h3>
                        <p>Reducing the amount of total fat intake to less than 30% of total energy intake helps to prevent unhealthy weight gain in the adult population&nbsp;<em>(1, 2, 3)</em>. Also, the risk of developing NCDs is lowered by:</p>
                        <ul type="disc">
                        <li>reducing saturated fats to less than 10% of total energy intake;</li>
                        <li>reducing&nbsp;<em>trans</em>-fats to less than 1% of total energy intake; and</li>
                        <li>replacing both saturated fats and&nbsp;<em>trans-</em>fats with unsaturated fats&nbsp;<em>(2, 3)</em>&nbsp;&ndash; in particular, with polyunsaturated fats.</li>
                        </ul>
                        <p>Fat intake, especially saturated fat and industrially-produced&nbsp;<em>trans-</em>fat intake, can be reduced by:</p>
                        <ul type="disc">
                        <li>steaming or boiling instead of frying when cooking;</li>
                        <li>replacing butter, lard and ghee with oils rich in polyunsaturated fats, such as soybean, canola (rapeseed), corn, safflower and sunflower oils;</li>
                        <li>eating reduced-fat dairy foods and lean meats, or trimming visible fat from meat; and</li>
                        <li>limiting the consumption of baked and fried foods, and pre-packaged snacks and foods (e.g. doughnuts, cakes, pies, cookies, biscuits and wafers) that contain industrially-produced&nbsp;<em>trans-</em>fats.</li>
                        </ul>
                        <h3>Salt, sodium and potassium</h3>
                        <p>Most people consume too much sodium through salt (corresponding to consuming an average of 9&ndash;12&nbsp;g of salt per day) and not enough potassium (less than 3.5&nbsp;g). High sodium intake and insufficient potassium intake contribute to high blood pressure, which in turn increases the risk of heart disease and stroke&nbsp;<em>(8, 11)</em>.</p>
                        <p>Reducing salt intake to the recommended level of less than 5 g per day could prevent 1.7&nbsp;million deaths each year&nbsp;<em>(12)</em>.</p>
                        <p>People are often unaware of the amount of salt they consume. In many countries, most salt &nbsp;comes from processed foods (e.g. ready meals; processed meats such as bacon, ham and salami; cheese; and salty snacks) or from foods consumed frequently in large amounts (e.g. bread). Salt is also added to foods during cooking (e.g. bouillon, stock cubes, soy sauce and fish sauce) or at the point of consumption (e.g. table salt).</p>
                        <p>Salt intake can be reduced by:</p>
                        <ul type="disc">
                        <li>limiting the amount of salt and high-sodium condiments (e.g. soy sauce, fish sauce and bouillon) when cooking and preparing foods;</li>
                        <li>not having salt or high-sodium sauces on the table;</li>
                        <li>limiting the consumption of salty snacks; and</li>
                        <li>choosing products with lower sodium content.</li>
                        </ul>
                        <p>Some food manufacturers are reformulating recipes to reduce the sodium content of their products, and people should be encouraged to check nutrition labels to see how much sodium is in a product before purchasing or consuming it.</p>
                        <p>Potassium can mitigate the negative effects of elevated sodium consumption on blood pressure. Intake of potassium can be increased by consuming fresh fruit and vegetables.</p>
                        <h3>Sugars</h3>
                        <p>In both adults and children, the intake of free sugars should be reduced to less than 10% of total energy intake&nbsp;<em>(2, 7)</em>. &nbsp;A reduction to less than 5% of total energy intake would provide additional health benefits&nbsp;<em>(7)</em>.</p>
                        <p>Consuming free sugars increases the risk of dental caries (tooth decay). Excess calories from foods and drinks high in free sugars also contribute to unhealthy weight gain, which can lead to overweight and obesity. Recent evidence also shows that free sugars influence blood pressure and serum lipids, and suggests that a reduction in free sugars intake reduces risk factors for cardiovascular diseases&nbsp;<em>(13)</em>.</p>
                        <p>Sugars intake can be reduced by:</p>
                        <ul type="disc">
                        <li>limiting the consumption of foods and drinks containing high amounts of sugars, such as sugary snacks, candies and sugar-sweetened beverages (i.e. all types of beverages containing free sugars &ndash; these include carbonated or non‐carbonated soft drinks, fruit or vegetable juices and drinks, liquid and powder concentrates, flavoured water, energy and sports drinks, ready‐to‐drink tea, ready‐to‐drink coffee and flavoured milk drinks); and</li>
                        <li>eating fresh fruit and raw vegetables as snacks instead of sugary snacks.</li>
                        </ul>        
                    </div>
                </div>
            </div> 
        </article>
        { /*<!-- Right sidebar -->*/}

        <aside className="conteiner__right"></aside>
      </main>
      <footer>
        <p>© 2022 Rolandor25 - PI Henry Food Single Page Aplication</p>
      </footer>
  </div> 
  )
}
