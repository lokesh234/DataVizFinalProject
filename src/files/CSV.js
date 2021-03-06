import React from "react";

const dataCSV = `Greek Council,Greek Organization,Home City,Home State,Home Country,Latitude of Home City,Longitude of Home City,Free and reduced percentage of  High School,Public or Private High School,Domestic or International High School,Boarding/Day High School,Religous High School?,Gender of High School's Students,Tuition of High School,Sports Team,Merit Scholarship
None,None,Accokeek,Maryland,United States,38.667617,-77.028309,Data not available,private,Domestic,Day,Episcopal,Co-Ed,36610,None,None
None,None,Advance,North Carolina,United States,35.941248,-80.409222,0.34741523,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Ajman,NA,United Arab Emirates,25.509129,55.361907,NA,private,International,Day,Unafilliated,Co-Ed,13093.46,None,None
None,None,Alameda,California,United States,37.609029,-121.899142,0.2268,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Albuquerque,New Mexico,United States,35.084103,-106.650985,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22870,None,None
None,None,Albuquerque,New Mexico,United States,35.084103,-106.650985,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22870,None,None
None,None,Albuquerque,New Mexico,United States,35.084103,-106.650985,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22870,Men's Track,None
Fraternity,Sigma Chi,Albuquerque,New Mexico,United States,35.084103,-106.650985,0.56784492,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Alexandria,Virginia,United States,38.80511,-77.047023,0.5183,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Allen,Texas,United States,33.103174,-96.67055,0.143,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Allen,Texas,United States,33.103174,-96.67055,0.143,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Allen,Texas,United States,33.103174,-96.67055,0.143,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Alpha Epsilon,Allentown,Pennsylvania,United States,40.602206,-75.471279,0.1950048,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Alpharetta,Georgia,United States,34.070958,-84.274733,Data not available,private,Domestic,Day,Catholic,Co-Ed,14170,Baseball,None
None,None,Alpharetta,Georgia,United States,34.070958,-84.274733,0.1135,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Alpharetta,Georgia,United States,34.070958,-84.274733,0.1135,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Alpharetta,Georgia,United States,34.070958,-84.274733,0.11442256,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Alpharetta,Georgia,United States,34.070958,-84.274733,0.10489856,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Alpharetta,Georgia,United States,34.070958,-84.274733,0.07061163,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Ambridge,Pennsylvania,United States,40.589234,-80.22506,NA,private,Domestic,Day,Unafilliated,Co-Ed,26670,None,None
None,None,Anacortes,Washington,United States,48.502012,-122.623736,0.2744,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Anchorage,Alaska,United States,61.216313,-149.894852,0.47,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Andover,Massachusetts,United States,42.65717,-71.140878,0.0727,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ankara,NA,Turkey,39.922073,32.853758,NA,private,International,Day,Unafilliated,Co-Ed,5450.21,None,None
None,None,Ankara,NA,Turkey,39.922073,32.853758,NA,private,International,Day,Unafilliated,Co-Ed,20000,None,None
None,None,Ankara,NA,Turkey,39.922073,32.853758,NA,private,International,Day,Unafilliated,Co-Ed,20000,None,None
Sorority,Kappa Alpha Theta,Ann Arbor,Michigan,United States,42.268157,-83.731229,0.16367403,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Annandale,Virginia,United States,38.83031,-77.196497,0.10092514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Anniston,Alabama,United States,33.695381,-85.839842,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,9494,None,None
None,None,Anyang,NA,South Korea,37.393853,126.957061,NA,private,International,Boarding,Unafilliated,Co-Ed,15000,None,None
None,None,Arcadia,California,United States,34.136208,-118.04015,0.1893,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Arlington,Virginia,United States,32.735582,-97.107119,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Arlington,Texas,United States,38.890396,-77.084158,0.52227722,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Arlington Heights,Illinois,United States,42.081268,-87.980066,0.13145756,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Armonk,New York,United States,41.126485,-73.714019,0.028735632,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Arvada,Colorado,United States,39.802764,-105.087484,0.0831965,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Arverne,New York,United States,40.593417,-73.789546,0.45374583,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ashburn,Virginia,United States,39.043719,-77.48749,0.06756756,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Asheville,North Carolina,United States,35.60095,-82.554016,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,54900,None,Alumni Endowed
Fraternity,Pi Kappa Alpha,Asheville,North Carolina,United States,35.60095,-82.554016,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,54900,None,None
None,None,Athens,Alabama,United States,39.32924,-82.101255,0.7300158,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Athens,Ohio,United States,34.744741,-86.976145,0.403,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Atherton,California,United States,37.461327,-122.197743,NA,private,Domestic,Day,Unafilliated,All-Girls,44580,None,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,NA,Data not available,Data not available,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27720,Baseball,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,26815,None,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Jewish,Co-Ed,26000,None,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,23463,None,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Catholic,Co-Ed,18650,Baseball,None
None,None,Atlanta,Georgia,United States,33.749099,-84.390185,0.7024,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Atlanta,Georgia,United States,33.749099,-84.390185,NA,private,Domestic,Boarding,Unafilliated,Co-Ed,60480,None,None
Sorority,Gamma Phi Beta,Atlanta,Georgia,United States,33.749099,-84.390185,Data not available,private,Domestic,Day,Episcopal,Co-Ed,26670,None,None
Fraternity,Alpha Tau Omega,Atlanta,Georgia,United States,33.749099,-84.390185,NA,private,Domestic,Day,Unafilliated,Co-Ed,23463,None,None
Fraternity,Pi Kappa Phi,Atlanta,Georgia,United States,33.749099,-84.390185,0.46158499,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Atlanta,Georgia,United States,33.749099,-84.390185,0.41552734,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Atlantic Beach,Florida,United States,30.342165,-81.37037,Data not available,private,Domestic,Day,Episcopal,Co-Ed,22400,None,None
None,None,Auburn,California,United States,38.894594,-121.07399,0.29004329,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Augusta,Georgia,United States,33.470971,-81.974843,0.25015995,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Aurora,Illinois,United States,41.317555,-81.345386,0.24518006,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Aurora,Colorado,United States,39.729432,-104.83192,0.15785609,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Aurora,Colorado,United States,39.729432,-104.83192,0.15785609,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Aurora,Ohio,United States,41.760585,-88.320071,0.0848,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Aurora,Colorado,United States,39.729432,-104.83192,0.15785609,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Austin,Texas,United States,30.271129,-97.743699,0.92756183,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Austin,Texas,United States,30.271129,-97.743699,0.12010252,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Austin,Texas,United States,30.271129,-97.743699,0.02794175,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Austin,Texas,United States,30.271129,-97.743699,Data not available,private,Domestic,Day,Episcopal,Co-Ed,25990,None,None
Sorority,Kappa Alpha Theta,Austin,Texas,United States,30.271129,-97.743699,0.318,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Austin,Texas,United States,30.271129,-97.743699,0.26708633,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Austin,Texas,United States,30.271129,-97.743699,0.02794175,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Aventura,Florida,United States,25.953257,-80.136646,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33200,None,None
None,None,Avon,Connecticut,United States,41.809821,-72.830654,0.0618,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
Fraternity,Delta Sigma Phi,Bainbridge Island,Washington,United States,47.65526,-122.535086,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,32000,None,None
Fraternity,Pi Kappa Phi,Bainbridge Island,Washington,United States,47.65526,-122.535086,0.075,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Lacrosse,None
None,None,Baku,NA,Azerbaijan,40.392514,49.846679,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Baldwin,New York,United States,40.656491,-73.609295,0.1694,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ballyconnell,NA,Ireland,54.116667,-7.583333,NA,public,International,Day,Catholic,All-Girls,0,Women's Golf,None
None,None,Baltimore,Maryland,United States,39.290861,-76.610807,0.6003,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Baltimore,Maryland,United States,39.290861,-76.610807,Data not available,private,Domestic,Day,Unafilliated,All-Boys,29690,None,None
None,None,Bangalore,NA,India,12.97912,77.5913,NA,private,International,Day,Unafilliated,Co-Ed,9462,None,None
None,None,Bangalore,NA,India,12.97912,77.5913,NA,private,International,Day,Unafilliated,Co-Ed,5128.5,None,None
None,None,Bangalore,NA,India,12.97912,77.5913,NA,private,International,Day,Unafilliated,Co-Ed,16705.6,None,None
None,None,Bangkok,NA,Thailand,13.585922,100.416087,NA,private,International,Boarding,Unafilliated,Co-Ed,118660.78,None,None
None,None,Barrington,Illinois,United States,42.153914,-88.136189,0.2113,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Barrington,Illinois,United States,42.153914,-88.136189,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Basking Ridge,New Jersey,United States,40.706409,-74.549272,0.02263157,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Basking Ridge,New Jersey,United States,40.706409,-74.549272,0.02263157,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
None,None,Battle,NA,United Kingdom,50.917771,0.483654,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Battle,NA,United Kingdom,50.917771,0.483654,NA,public,International,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Kappa Alpha Theta,Bay Harbor Islands,Florida,United States,25.887595,-80.131156,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33200,None,None
None,None,Bay Shore,New York,United States,40.725099,-73.245395,0.4708,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Lacrosse,None
None,None,Bayonne,New Jersey,United States,40.668714,-74.114309,0.6695,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bear,Delaware,United States,39.629279,-75.658263,0.32443626,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bear Creek,North Carolina,United States,34.657556,-77.253685,0.35643564,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Beaumont,Texas,United States,30.086046,-94.101846,Data not available,private,Domestic,Day,Catholic,Co-Ed,11475,None,None
None,None,Bee Cave,Texas,United States,30.308537,-97.94501,0.09957048,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Beijing,NA,China,39.905963,116.391248,NA,public,International,NA,Unafilliated,NA,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,NA,Unafilliated,NA,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,private,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Data not available,Unafilliated,Co-Ed,9187.8,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Data not available,Unafilliated,Co-Ed,9187.8,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,private,International,Day,Unafilliated,Co-Ed,32220,None,None
None,None,Beijing,NA,China,39.905963,116.391248,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56100,None,None
None,None,Beijing,NA,China,39.905963,116.391248,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Beirut,NA,Lebanon,33.89592,35.47843,NA,private,International,Day,Unafilliated,Co-Ed,7662.58,None,None
None,None,Beirut,NA,Lebanon,33.89592,35.47843,NA,private,International,Day,Unafilliated,Co-Ed,5895.12,None,None
None,None,Beirut,NA,Lebanon,33.89592,35.47843,NA,private,International,Boarding,Unafilliated,Co-Ed,37000,None,None
None,None,Bel Air,Maryland,United States,39.535506,-76.34904,0.12529976,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bellaire,Texas,United States,29.705786,-95.45883,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27545,None,None
None,None,Bellaire,Texas,United States,29.705786,-95.45883,Data not available,private,Domestic,Day,Jewish,Co-Ed,21030,None,None
None,None,Belle Mead,New Jersey,United States,40.466771,-74.660714,0.03850641,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Alpha Epsilon,Belle Mead,New Jersey,United States,40.466771,-74.660714,0.03850641,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bellevue,Washington,United States,47.614422,-122.192337,0.24716981,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bellevue,Washington,United States,47.614422,-122.192337,0.13121387,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bellevue,Washington,United States,47.614422,-122.192337,0.1152,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Bellevue,Washington,United States,47.614422,-122.192337,0.13121387,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Bellmore,New York,United States,40.654081,-73.528588,0.11544461,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Belmont,Massachusetts,United States,35.242918,-81.037297,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,55700,Women's Lacrosse,None
None,None,Belmont,North Carolina,United States,42.39593,-71.178665,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,14365,None,None
None,None,Belmont,Massachusetts,United States,42.39593,-71.178665,0.0792,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
Fraternity,Alpha Tau Omega,Belvedere,California,United States,37.872704,-122.464417,NA,private,Domestic,Day,Unafilliated,Co-Ed,42285,None,None
Sorority,Delta Delta Delta,Belvedere,California,United States,37.872704,-122.464417,NA,private,Domestic,Day,Catholic,All-Girls,19500,None,None
None,None,Bensalem,Pennsylvania,United States,40.104555,-74.951279,0.4204,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Berkley,Michigan,United States,42.503091,-83.183539,0.1725,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Berlin,Ohio,United States,40.561173,-81.7943,0.24840764,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bernardsville,New Jersey,United States,40.718681,-74.569227,Data not available,private,Domestic,Day,Catholic,All-Boys,37900,Men's Lacrosse,None
None,None,Bernardsville,New Jersey,United States,40.718681,-74.569227,0.0985,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
None,None,Bernardsville,New Jersey,United States,40.718681,-74.569227,0.0985,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Berwyn,Pennsylvania,United States,40.044831,-75.438805,0.06094588,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Berwyn,Pennsylvania,United States,40.044831,-75.438805,0.06094588,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bethesda,Maryland,United States,38.984827,-77.094646,Data not available,private,Domestic,Day,Quaker,Co-Ed,39360,None,None
None,None,Bethesda,Maryland,United States,38.984827,-77.094646,0.1174,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bethesda,Maryland,United States,38.984827,-77.094646,0.06896551,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
Sorority,Pi Beta Phi,Bethesda,Maryland,United States,38.984827,-77.094646,Data not available,private,Domestic,Day,Unafilliated,All-Girls,40150,None,None
Sorority,Kappa Kappa Gamma,Bethesda,Maryland,United States,38.984827,-77.094646,Data not available,private,Domestic,Day,Quaker,Co-Ed,39360,None,None
Sorority,Alpha Delta Pi,Bethesda,Maryland,United States,38.984827,-77.094646,0.02523659,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Beverly Hills,California,United States,34.07362,-118.400356,NA,private,Domestic,Day,Unafilliated,Co-Ed,35900,None,None
Fraternity,Alpha Epsilon Pi,Billerica,Massachusetts,United States,42.558426,-71.268947,0.1887,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Billings,Montana,United States,45.787496,-108.49607,Data not available,private,Domestic,Day,Catholic,Co-Ed,8640,None,Robertson
None,None,Biot,NA,France,43.628033,7.096645,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Birmingham,Alabama,United States,33.520682,-86.802433,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21552,None,AB
None,None,Birmingham,Alabama,United States,33.520682,-86.802433,0.05,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Blackburn,NA,Australia,-37.821701,145.152276,NA,public,International,Day,Unafilliated,All-Girls,0,Women's Tennis,None
None,None,Blacksburg,Virginia,United States,37.229573,-80.413939,0.1699,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Blackwood,New Jersey,United States,39.802336,-75.06406,0.28236246,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bloomfield,Connecticut,United States,41.826488,-72.730094,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,44550,None,None
None,None,Bloomfield,New Jersey,United States,41.826488,-72.730094,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37270,None,None
None,None,Bloomfield,Connecticut,United States,41.826488,-72.730094,0.5,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bloomfield,Connecticut,United States,40.806767,-74.185423,0.17606123,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33100,None,None
None,None,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33100,Men's Lacrosse,None
None,None,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,Data not available,private,Domestic,Day,Catholic,Co-Ed,12800,None,None
None,None,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,0.086,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,0.086,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Bloomfield Hills,Michigan,United States,42.583645,-83.245488,0.086,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bloomington,Illinois,United States,40.473107,-88.99414,Data not available,private,Domestic,Day,Catholic,Co-Ed,9300,None,None
Sorority,Kappa Alpha Theta,Blue Ash,Ohio,United States,39.232007,-84.378282,0.15773067,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bluffton,South Carolina,United States,32.237147,-80.860387,0.3625,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,0.3281,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,0.3281,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,0.31659056,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,0.22933446,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boca Raton,Florida,United States,26.358689,-80.083098,0.1988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
Fraternity,Alpha Epsilon Pi,Boca Raton,Florida,United States,26.358689,-80.083098,NA,private,Domestic,Day,Unafilliated,Co-Ed,31030,None,None
Fraternity,Sigma Phi Epsilon,Boca Raton,Florida,United States,26.358689,-80.083098,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,26950,None,AB
Sorority,Chi Omega,Boca Raton,Florida,United States,26.358689,-80.083098,0.22933446,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Boerne,Texas,United States,29.794664,-98.73197,0.095,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Bogota,NA,Colombia,4.598048,-74.076087,NA,private,International,Day,Inter-/Non-denominational,Co-Ed,28822.45,None,None
None,None,Bogota,NA,Colombia,4.598048,-74.076087,NA,private,International,Day,Catholic,Co-Ed,NA,None,None
None,None,Boise,Idaho,United States,43.61656,-116.200835,0.31284916,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
Fraternity,Kappa Alpha Order,Boise,Idaho,United States,43.61656,-116.200835,0.222,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boone,North Carolina,United States,36.216795,-81.674552,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boston,Massachusetts,United States,42.360482,-71.059568,NA,private,International,Day,Unafilliated,Co-Ed,32219.44,None,None
Sorority,Alpha Phi,Boulder,Colorado,United States,40.014986,-105.270546,0.2148,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Boulder,Colorado,United States,40.014986,-105.270546,0.2148,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bowling Green,Kentucky,United States,36.99032,-86.443602,0.25499092,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Boyds,Maryland,United States,39.184089,-77.312232,0.07183673,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bradenton,Florida,United States,27.498928,-82.574819,0.52677459,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
Sorority,Zeta Tau Alpha,Bradenton,Florida,United States,27.498928,-82.574819,0.52677459,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Brampton,NA,Canada,43.714575,-79.752387,NA,private,International,Day,Inter-/Non-denominational,Co-Ed,8392.04,Men's Soccer,None
None,None,Brandon,Florida,United States,27.937801,-82.285925,0.377,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Brentwood,Tennessee,United States,36.032569,-86.782523,0.04,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Brentwood,Tennessee,United States,36.032569,-86.782523,0.04,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Brentwood,Tennessee,United States,36.032569,-86.782523,NA,private,Domestic,Day,Unafilliated,All-Girls,26240,None,None
Sorority,Delta Delta Delta,Briarcliff Manor,New York,United States,41.145651,-73.823746,0.030405405,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bridgewater,New Jersey,United States,39.864557,-75.397971,0.080152672,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Brighton,Massachusetts,United States,42.350097,-71.156442,0.2575,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
None,None,Bristow,Virginia,United States,38.723326,-77.536567,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,26850,None,None
None,None,Bristow,Virginia,United States,38.723326,-77.536567,0.22764227,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bristow,Virginia,United States,38.723326,-77.536567,0.11785095,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Broadlands,Virginia,United States,39.023252,-77.513323,0.01813186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Broadview Heights,Ohio,United States,41.313943,-81.685127,0.1189,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Sigma,Bronx,New York,United States,40.852786,-73.839054,Data not available,private,Domestic,Day,Catholic,All-Boys,8300,None,None
None,None,Bronx,New York,United States,40.852786,-73.839054,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
None,None,Brookfield,Wisconsin,United States,43.060567,-88.106479,0.13,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Brookfield,Wisconsin,United States,43.060567,-88.106479,0.1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Brookfield,Wisconsin,United States,43.060567,-88.106479,Data not available,private,Domestic,Day,Catholic,All-Girls,12580,None,None
Fraternity,Alpha Epsilon Pi,Brookfield,Wisconsin,United States,43.060567,-88.106479,0.13,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Brookline,Massachusetts,United States,42.331764,-71.121163,0.147506562,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Brooklyn,New York,United States,40.650104,-73.949582,Data not available,private,Domestic,Day,Jewish,Co-Ed,NA,None,None
None,None,Brooklyn,New York,United States,40.650104,-73.949582,Data not available,private,Domestic,Day,Catholic,Co-Ed,8500,None,None
None,None,Brooklyn,New York,United States,40.650104,-73.949582,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,59900,None,None
None,None,Brooklyn,New York,United States,40.650104,-73.949582,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,43675,None,None
None,None,Brooklyn,New York,United States,40.650104,-73.949582,0.4264,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Brooklyn,New York,United States,40.650104,-73.949582,Data not available,private,Domestic,Day,Catholic,Co-Ed,35800,None,None
Sorority,Alpha Delta Pi,Brooklyn,New York,United States,40.650104,-73.949582,0.45374583,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Bryn Mawr,Pennsylvania,United States,40.303959,-80.086721,Data not available,private,Domestic,Day,Unafilliated,All-Boys,38000,None,None
None,None,Buda,Texas,United States,30.074571,-97.841414,0.35201328,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
None,None,Budapest,NA,Hungary,47.498382,19.040471,NA,private,International,Day,Unafilliated,Co-Ed,22800,None,None
None,None,Budd Lake,New Jersey,United States,40.87121,-74.734052,0.11904761,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Buffalo,New York,United States,42.886717,-78.878392,0.12605042,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Buffalo Grove,Illinois,United States,42.167583,-87.95564,0.1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bundang-gu,NA,South Korea,37.375693,127.094125,NA,private,International,Boarding,Unafilliated,Co-Ed,15000,None,None
None,None,Burke,Virginia,United States,38.777132,-77.275469,0.14953271,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Burlingame,California,United States,37.584103,-122.366082,0.1026,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Swimming,None
Fraternity,Sigma Alpha Epsilon,Burlingame,California,United States,37.584103,-122.366082,0.1026,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Burlington,North Carolina,United States,36.095692,-79.437799,0.74751243,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Track,None
None,None,Burr Ridge,Illinois,United States,41.74892,-87.918392,0.32289748,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Bursa,NA,Turkey,40.182706,29.066764,NA,private,International,Boarding,Unafilliated,Co-Ed,16811.2,None,None
None,None,Busan,NA,South Korea,35.185317,129.06259,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57500,None,None
Fraternity,Sigma Alpha Epsilon,Calabasas,California,United States,34.144664,-118.644097,0.0707,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cambridge,Massachusetts,United States,42.377274,-71.130574,NA,private,International,Day,Presbyterian,Co-Ed,NA,Men's Fencing,None
None,None,Campobello,South Carolina,United States,35.115671,-82.150111,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Canterbury,NA,United Kingdom,-43.494176,171.809845,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,Karsh
Sorority,Pi Beta Phi,Cape Elizabeth,Maine,United States,43.563696,-70.200047,0.085185185,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Carlsbad,California,United States,33.158093,-117.350594,0.06706408,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Carmel,California,United States,38.755113,-121.353309,0.1274,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Carmel,Indiana,United States,39.978371,-86.118043,0.1274,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Carrboro,North Carolina,United States,35.910144,-79.075289,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Carrboro,North Carolina,United States,35.910144,-79.075289,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Carrollton,Georgia,United States,33.58011,-85.076611,0.470175439,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Carrollton,Texas,United States,32.953735,-96.890282,0.46737841,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,NA,private,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Antabaptist,All-Girls,23080,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Catholic,Co-Ed,14340,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Catholic,Co-Ed,14340,Women's Soccer,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.34525602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.34525602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.34525602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.34525602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.16583953,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.11787072,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.11787072,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.11787072,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.0887,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.07016806,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0.07016806,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cary,North Carolina,United States,35.788297,-78.781192,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Cary,North Carolina,United States,35.788297,-78.781192,NA,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
Fraternity,Kappa Sigma,Cary,North Carolina,United States,35.788297,-78.781192,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,BN
Fraternity,Alpha Tau Omega,Cary,North Carolina,United States,35.788297,-78.781192,0.34525602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
Sorority,Zeta Tau Alpha,Cary,North Carolina,United States,35.788297,-78.781192,0.11787072,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Cary,North Carolina,United States,35.788297,-78.781192,0.07016806,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Casa Grande,Arizona,United States,32.879382,-111.757561,0.66911379,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Castle Rock,Colorado,United States,39.372659,-104.858426,Data not available,private,Domestic,Day,Catholic,All-Boys,15475,Men's Track,None
None,None,Cavan,NA,Ireland,54.034975,-7.293702,NA,public,International,Day,Catholic,All-Girls,0,Women's Golf,None
None,None,Centennial,Colorado,United States,39.579155,-104.876923,0.22395023,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Centennial,Colorado,United States,39.579155,-104.876923,0.075,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Centennial,Colorado,United States,39.579155,-104.876923,0.075,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Centennial,Colorado,United States,39.579155,-104.876923,0.22395023,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chagrin Falls,Ohio,United States,41.436164,-81.386501,0.05082417,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chagrin Falls,Ohio,United States,41.436164,-81.386501,0.05082417,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chandler,Arizona,United States,33.306674,-111.84086,0.2331,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chandler,Arizona,United States,33.306674,-111.84086,0.2331,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chandler,Arizona,United States,33.306674,-111.84086,0.1515,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Chandler,Arizona,United States,33.306674,-111.84086,0.2331,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chantilly,Virginia,United States,38.894379,-77.430512,0.08471074,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chantilly,Virginia,United States,38.894379,-77.430512,0.01813186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chaoyang Qu,NA,China,23.339305,116.45712,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,Rowing,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.209867964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Chapel Hill,North Carolina,United States,35.9132,-79.055844,NA,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
Fraternity,Pi Kappa Alpha,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.209867964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Chapel Hill,North Carolina,United States,35.9132,-79.055844,0.178181818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Chappaqua,New York,United States,41.15954,-73.764855,0.030405405,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Chappaqua,New York,United States,41.15954,-73.764855,0.02930127,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Chappaqua,New York,United States,41.15954,-73.764855,0.02930127,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Chappaqua,New York,United States,41.15954,-73.764855,0.02930127,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Charleston,South Carolina,United States,32.787601,-79.940273,NA,private,International,Day,Unafilliated,Co-Ed,23508.46,None,None
None,None,Charleston,South Carolina,United States,32.787601,-79.940273,0.5047619,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Charleston,West Virginia,United States,38.350599,-81.633281,0.19545454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Charleston,South Carolina,United States,32.787601,-79.940273,0.0388,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,8450,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Catholic,Co-Ed,15205,Women's Swimming,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24030,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22340,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.99558823,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.57522594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.57522594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.57522594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.45348438,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.45348438,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.1225,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlotte,North Carolina,United States,35.227087,-80.843127,0.10045203,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24030,None,None
Sorority,Delta Gamma,Charlotte,North Carolina,United States,35.227087,-80.843127,NA,private,Domestic,Day,Unafilliated,Co-Ed,22415,None,None
Fraternity,Pi Kappa Phi,Charlotte,North Carolina,United States,35.227087,-80.843127,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22415,None,None
Sorority,Chi Omega,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Charlotte,North Carolina,United States,35.227087,-80.843127,0.30738595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Charlotte,North Carolina,United States,35.227087,-80.843127,0.1225,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Charlotte,North Carolina,United States,35.227087,-80.843127,0.1225,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Charlottesville,Virginia,United States,38.029306,-78.476678,0.43935538,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Charlottesville,Virginia,United States,38.029306,-78.476678,0.43935538,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Charlottesville,Virginia,United States,38.029306,-78.476678,0.0940499,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chatham,New Jersey,United States,40.740934,-74.383762,0.02268907,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Lacrosse,None
Fraternity,Delta Tau Delta,Chatham,New Jersey,United States,40.740934,-74.383762,Data not available,private,Domestic,Day,Catholic,All-Boys,37900,None,None
None,None,Chengdu,NA,China,30.676555,104.061278,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Chengdu,NA,China,30.676555,104.061278,NA,private,International,Boarding,Unafilliated,Co-Ed,5666.92,None,None
None,None,Cherry Hill,New Jersey,United States,39.934835,-75.030726,0.297933,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chesapeake,Virginia,United States,36.718371,-76.24668,0.50649932,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chester,Virginia,United States,40.61312,-80.562848,0.02,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chester Springs,Pennsylvania,United States,40.095104,-75.616868,Data not available,private,Domestic,Day,Catholic,All-Boys,31200,Men's Lacrosse,None
None,None,Chesterfield,Missouri,United States,38.656057,-90.574203,Data not available,private,Domestic,Day,Catholic,All-Boys,14725,Fooball,None
Fraternity,Chi Psi,Chestnut Hill,Massachusetts,United States,42.330653,-71.162276,0.16879293,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Chevy Chase,Maryland,United States,38.993207,-77.074383,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57500,None,None
None,None,Chicago,Illinois,United States,41.875555,-87.624421,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,59760,None,None
None,None,Chicago,Illinois,United States,41.875555,-87.624421,0.97,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chicago,Illinois,United States,41.875555,-87.624421,0.86596491,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chicago,Illinois,United States,41.875555,-87.624421,0.43356009,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Basketball,None
None,None,Chonburi,NA,Thailand,13.365843,100.988962,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Chuncheon,NA,South Korea,37.881468,127.730465,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,54900,None,None
None,None,Cincinnati,Ohio,United States,39.101454,-84.51246,0.15773067,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
Sorority,Alpha Phi,Clarence,New York,United States,42.976973,-78.592038,0.07636603,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Clarksburg,Maryland,United States,39.238716,-77.279429,0.28,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Clarksville,Maryland,United States,39.206545,-76.942918,0.05496183,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Clayton,North Carolina,United States,35.650711,-78.456391,0.27247956,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Clemmons,North Carolina,United States,36.021526,-80.381998,NA,private,Domestic,Day,Unafilliated,Co-Ed,21518,None,None
None,None,Clemson,South Carolina,United States,34.685075,-82.836411,0.28156221,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cleveland,Ohio,United States,41.505161,-81.693445,Data not available,private,Domestic,Day,Unafilliated,All-Girls,29725,None,None
None,None,Clifton,Virginia,United States,38.780591,-77.386835,0.22764227,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Lacrosse,None
None,None,Clifton Park,New York,United States,42.865633,-73.770953,0.12225405,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Clinton,Maryland,United States,38.765115,-76.898306,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39699,Women's Basketball,None
None,None,Clovis,California,United States,36.825228,-119.702919,0.1665,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,None
None,None,Cockeysville,Maryland,United States,39.484566,-76.650284,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28960,None,None
None,None,Cockeysville,Maryland,United States,39.484566,-76.650284,0.192,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Coconut Creek,Florida,United States,26.271463,-80.181808,0.68616799,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Cold Spring Harbor,New York,United States,40.871487,-73.456788,0.00829875,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Delta Phi,Colleyville,Texas,United States,32.88096,-97.155012,0.12556255,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Collierville,Tennessee,United States,35.042036,-89.664527,0.28,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Colorado Springs,Colorado,United States,38.833958,-104.825348,0.32048192,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Columbia,Maryland,United States,39.215621,-76.858205,0.35494327,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Columbus,Ohio,United States,39.96226,-83.000706,Data not available,private,Domestic,Day,Catholic,Co-Ed,9180,Fooball,None
None,None,Columbus,Georgia,United States,39.96226,-83.000706,0.19123506,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Columbus,Ohio,United States,39.96226,-83.000706,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Columbus,Ohio,United States,32.460976,-84.987709,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Concord,New Hampshire,United States,35.408752,-80.579511,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,56460,Women's Lacrosse,None
None,None,Concord,North Carolina,United States,35.408752,-80.579511,0.43166542,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Concord,North Carolina,United States,43.207106,-71.537022,0.43166542,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Concord,North Carolina,United States,35.408752,-80.579511,NA,private,Domestic,Day,Pentecostal,Co-Ed,6500,None,None
None,None,Conifer,Colorado,United States,39.523342,-105.305499,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Conway,Arkansas,United States,35.088696,-92.442101,0.3848,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Coogee,NA,Australia,-32.115081,115.771746,NA,private,International,Day,Catholic,All-Boys,4699.46,None,Robertson
None,None,Copiague,New York,United States,40.684054,-73.40081,0.645,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Coppell,Texas,United States,32.958352,-96.988183,0.09661989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Coquitlam,NA,Canada,49.283599,-122.794331,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Coral Gables,Florida,United States,25.690552,-80.235009,Data not available,private,Domestic,Day,Catholic,All-Girls,31800,None,None
Sorority,Kappa Kappa Gamma,Coral Gables,Florida,United States,25.690552,-80.235009,Data not available,private,Domestic,Day,Catholic,All-Girls,31800,None,None
None,None,Coral Springs,Florida,United States,26.264856,-80.265342,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,26100,Men's Swimming,None
None,None,Coral Springs,Florida,United States,26.264856,-80.265342,0.2139973,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cordova,Tennessee,United States,35.155645,-89.776195,Data not available,private,Domestic,Day,Catholic,All-Boys,12750,None,None
None,None,Cordova,Tennessee,United States,35.155645,-89.776195,0.28,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,Cornelius,North Carolina,United States,35.486803,-80.860074,0.16021198,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Corona del Mar,California,United States,32.4979,-117.10339,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37700,None,None
Sorority,Kappa Kappa Gamma,Corpus Christi,Texas,United States,27.800254,-97.395574,0.6061795,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Corte Madera,California,United States,37.925481,-122.527475,0.04756171,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Corte Madera,California,United States,37.925481,-122.527475,0.04756171,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Cortlandt Manor,New York,United States,41.282198,-73.71417,0.17254408,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Cos Cob,Connecticut,United States,41.033431,-73.59957,NA,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
Fraternity,Kappa Sigma,Coto Laurel,Puerto Rico,United States,18.040362,-66.547664,Data not available,private,Domestic,Day,Catholic,All-Boys,NA,None,None
None,None,Cowpens,South Carolina,United States,35.016792,-81.803992,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,18636,None,None
None,None,Cranbury,New Jersey,United States,40.31622,-74.513764,0.04619226,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
None,None,Cresskill,New Jersey,United States,40.941487,-73.959304,0.0464,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Crofton,Maryland,United States,39.001777,-76.687467,0.4672,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Cuba City,Wisconsin,United States,42.605555,-90.42985,Data not available,private,Domestic,Day,Catholic,Co-Ed,7100,None,None
None,None,Cupertino,California,United States,37.323011,-122.032252,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,45877,None,None
None,None,Cupertino,California,United States,37.323011,-122.032252,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,45877,None,None
None,None,Cypress,California,United States,33.824824,-118.039937,0.37939698,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Dacula,Georgia,United States,33.988717,-83.897957,0.23915343,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Daegu,NA,South Korea,9.2266,13.043,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,52050,None,None
None,None,Daejeon,NA,South Korea,36.332633,127.384576,NA,private,International,Boarding,Unafilliated,Co-Ed,NA,None,None
None,None,Daejeon,NA,South Korea,36.332633,127.384576,NA,private,International,Boarding,Unafilliated,Co-Ed,NA,None,None
None,None,Dalian,NA,China,38.920716,121.638868,NA,public,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,21020,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,21020,Wrestling,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,30750,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,All-Boys,29496,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,Co-Ed,28620,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,Co-Ed,27220,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,0.48850358,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dallas,Texas,United States,32.776272,-96.796856,0.30714602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,30750,None,None
Fraternity,Kappa Alpha Order,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,All-Boys,29496,None,None
Fraternity,Sigma Chi,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,All-Boys,29496,None,None
Sorority,Alpha Phi,Dallas,Texas,United States,32.776272,-96.796856,NA,private,Domestic,Day,Unafilliated,All-Girls,29000,None,None
Sorority,Kappa Kappa Gamma,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Unafilliated,All-Girls,29000,None,None
Sorority,Kappa Kappa Gamma,Dallas,Texas,United States,32.776272,-96.796856,Data not available,private,Domestic,Day,Episcopal,Co-Ed,28620,None,None
Fraternity,Kappa Alpha Order,Dallas,Texas,United States,32.776272,-96.796856,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,AB
Fraternity,Pi Kappa Phi,Dallas,Texas,United States,32.776272,-96.796856,0.13501381,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Dallas,Texas,United States,32.776272,-96.796856,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Darien,Connecticut,United States,41.078708,-73.469287,NA,private,Domestic,Day,Unafilliated,Co-Ed,42770,None,None
None,None,Darien,Connecticut,United States,41.078708,-73.469287,0.01538461,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Darien,Connecticut,United States,41.078708,-73.469287,0.01538461,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Data not available,NA,South Korea,NA,NA,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,53900,None,None
None,None,Davie,Florida,United States,26.075729,-80.284109,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,31030,Baseball,None
None,None,Davie,Florida,United States,26.075729,-80.284109,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,31030,None,None
None,None,Davie,Florida,United States,26.075729,-80.284109,Data not available,private,Domestic,Day,Catholic,Co-Ed,12250,None,None
None,None,Davie,Florida,United States,26.075729,-80.284109,0.58046511,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Davie,Florida,United States,26.075729,-80.284109,0.40153207,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Daytona Beach,Florida,United States,29.210815,-81.022833,0.32062523,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dededo,Guam,United States,13.519054,144.837839,Data not available,private,Domestic,Day,Episcopal,Co-Ed,13100,None,None
None,None,Deerfield,Illinois,United States,42.171137,-87.844512,0.1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Deerfield Beach,Florida,United States,26.318342,-80.099631,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28266,None,None
Fraternity,Sigma Alpha Epsilon,Dehra Dun,NA,India,30.325565,78.043681,NA,private,International,Boarding,Unafilliated,All-Boys,15258.1,None,None
None,None,Delray Beach,Florida,United States,26.461463,-80.07282,Data not available,private,Domestic,Day,Episcopal,Co-Ed,41900,None,None
None,None,Demarest,New Jersey,United States,40.957321,-73.963471,Data not available,private,Domestic,Day,Catholic,All-Girls,"16,600",None,None
Fraternity,Delta Sigma Phi,Den Haag,NA,Netherlands,52.074946,4.26968,NA,private,International,Day,Unafilliated,Co-Ed,40166.83,None,None
Sorority,Zeta Tau Alpha,Denton,North Carolina,United States,35.633471,-80.115881,0.51025056,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Denver,Colorado,United States,39.739154,-104.984703,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25430,None,None
None,None,Denver,Colorado,United States,39.739154,-104.984703,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25430,None,AB
None,None,Denver,Colorado,United States,39.739154,-104.984703,Data not available,private,Domestic,Day,Catholic,All-Boys,15475,None,None
Fraternity,Pi Kappa Phi,Denver,Colorado,United States,39.739154,-104.984703,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27330,None,None
None,None,Detroit,Michigan,United States,42.348664,-83.056737,0.45,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dix Hills,New York,United States,40.804821,-73.33623,Data not available,private,Domestic,Day,Quaker,Co-Ed,34100,None,None
None,None,Dix Hills,New York,United States,40.804821,-73.33623,0.06838656,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dixmont,Maine,United States,44.680347,-69.162822,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,59640,Women's Soccer,None
None,None,Dover,Massachusetts,United States,42.245931,-71.282834,0.04072398,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Dover,Massachusetts,United States,42.245931,-71.282834,Data not available,private,Domestic,Day,Unafilliated,All-Boys,30500,Men's Soccer,None
Sorority,Alpha Delta Pi,Doylestown,Pennsylvania,United States,40.310004,-75.130484,0.03758472,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Doylestown,Pennsylvania,United States,40.310004,-75.130484,0.03758472,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Doylestown,Pennsylvania,United States,40.310004,-75.130484,0.03758472,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dubai,NA,United Arab Emirates,25.268352,55.296196,NA,private,International,Day,Unafilliated,Co-Ed,20223.55,None,None
None,None,Duluth,Georgia,United States,34.002857,-84.144105,0.56,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Duluth,Georgia,United States,34.002857,-84.144105,0.56,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Duluth,Georgia,United States,34.002857,-84.144105,0.31329803,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Duluth,Georgia,United States,34.002857,-84.144105,0.06295525,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Duluth,Georgia,United States,34.002857,-84.144105,0.06295525,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Duluth,Georgia,United States,34.002857,-84.144105,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25800,Men's Soccer,None
Fraternity,Kappa Alpha Order,Duluth,Georgia,United States,34.002857,-84.144105,0.6741573,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Duluth,Georgia,United States,34.002857,-84.144105,0.06295525,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Dumfries,Virginia,United States,38.56762,-77.328038,0.44394618,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
None,None,Dunkirk,Maryland,United States,38.721784,-76.660519,0.11725955,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,59640,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,0.38545454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,0.38545454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Durham,North Carolina,United States,35.994033,-78.898619,0.18954248,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Durham,North Carolina,United States,35.994033,-78.898619,NA,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
Sorority,Gamma Phi Beta,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
Fraternity,Kappa Sigma,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
Fraternity,Sigma Alpha Epsilon,Durham,North Carolina,United States,35.994033,-78.898619,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24040,None,None
Fraternity,Kappa Alpha Order,Durham,North Carolina,United States,35.994033,-78.898619,0.52843732,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Durham,North Carolina,United States,35.994033,-78.898619,0.41341991,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
Sorority,Zeta Tau Alpha,Durham,North Carolina,United States,35.994033,-78.898619,0.41341991,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Durham,North Carolina,United States,35.994033,-78.898619,0.38545454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Earlysville,Virginia,United States,38.157634,-78.48279,Data not available,private,Domestic,Day,Quaker,Co-Ed,22600,Women's Fencing,None
None,None,Easley,South Carolina,United States,34.826928,-82.581705,0.3873824,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
Sorority,Kappa Kappa Gamma,East Amherst,New York,United States,43.018391,-78.696697,Data not available,private,Domestic,Day,Catholic,All-Girls,14800,None,None
Sorority,Alpha Phi,East Brunswick,New Jersey,United States,40.427884,-74.415984,0.1453382,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,East Elmhurst,New York,United States,40.761212,-73.865136,0.473666777,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,East Greenwich,Rhode Island,United States,41.660379,-71.455891,Data not available,private,Domestic,Day,Quaker,Co-Ed,34385,None,None
Fraternity,Pi Kappa Alpha,East Northport,New York,United States,40.876765,-73.324561,0.16494845,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,East Rockaway,New York,United States,40.642048,-73.669575,0.10375275,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,East Setauket,New York,United States,40.941843,-73.105856,0.07069616,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Easton,Maryland,United States,38.774283,-76.07633,Data not available,private,Domestic,Day,Catholic,Co-Ed,12750,None,None
None,None,Ebute Metta,NA,Nigeria,6.486255,3.385612,NA,private,International,Boarding,Unafilliated,Co-Ed,30900,None,Robertson
Fraternity,Chi Psi,Eden Prairie,Minnesota,United States,44.854686,-93.470786,0.17392761,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Eden Prairie,Minnesota,United States,44.854686,-93.470786,0.17392761,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Eden Prairie,Minnesota,United States,44.854686,-93.470786,0.17392761,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Edina,Minnesota,United States,44.889703,-93.350122,0.08291708,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Edinboro,Pennsylvania,United States,41.874223,-80.131724,0.27994616,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Edinburg,Texas,United States,26.301398,-98.16245,0.83449235,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Edinburgh,NA,United Kingdom,55.949563,-3.191497,NA,private,International,Day,Unafilliated,Co-Ed,36413.77,None,None
None,None,Edison,New Jersey,United States,40.538238,-74.394517,0.18801843,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Edison,New Jersey,United States,40.538238,-74.394517,0.18801843,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Edmond,Oklahoma,United States,35.657137,-97.464904,0.27252353,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Eight Mile,Alabama,United States,30.763521,-88.126946,Data not available,private,Domestic,Day,Episcopal,Co-Ed,11628,Fooball,None
None,None,El Paso,Texas,United States,31.811131,-106.501349,Data not available,private,Domestic,Day,Catholic,All-Boys,6680,None,None
None,None,Elgin,Texas,United States,30.349351,-97.370576,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,17695,None,AB
None,None,Elk Grove,California,United States,38.408799,-121.371618,0.2393,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Elkridge,Maryland,United States,39.212834,-76.713715,Data not available,private,Domestic,Day,Catholic,All-Boys,15200,Men's Soccer,None
None,None,Elkridge,Maryland,United States,39.212834,-76.713715,Data not available,private,Domestic,Day,Catholic,Co-Ed,19550,Women's Soccer,None
None,None,Ellicott City,Maryland,United States,39.267328,-76.798307,0.05496183,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Elm City,North Carolina,United States,35.806546,-77.863315,0.45877862,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Soccer,None
Sorority,Pi Beta Phi,Elmhurst,Illinois,United States,41.899475,-87.940342,0.17850502,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Encinitas,California,United States,33.036987,-117.291982,0.075,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Encino,California,United States,34.159132,-118.501617,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38925,None,None
None,None,Enfield,Connecticut,United States,41.976208,-72.591755,0.19,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Englewood,Colorado,United States,39.648206,-104.987964,0.12293211,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Reggie
None,None,Escazu,NA,Costa Rica,9.917358,-84.141072,NA,private,International,Day,Unafilliated,Co-Ed,10750,None,None
None,None,Essex Junction,Vermont,United States,44.490605,-73.11096,NA,public,Domestic,Day,Unafilliated,Co-Ed,7416.48,None,None
None,None,Eugene,Oregon,United States,44.101181,-123.152384,0.25156794,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Eureka,Missouri,United States,38.502554,-90.627904,0.08902691,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,Eureka,Missouri,United States,38.502554,-90.627904,0.08902691,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Evanston,Illinois,United States,42.044739,-87.693046,0.41623376,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Excelsior,Minnesota,United States,44.903296,-93.566345,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,29025,Women's Lacrosse,None
Fraternity,Kappa Sigma,Eyuep,NA,Turkey,41.165287,28.883045,NA,private,International,Day,Unafilliated,Co-Ed,18598.25,None,None
Sorority,Kappa Kappa Gamma,Fair Haven,New Jersey,United States,40.360665,-74.038195,0.00319829,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Soccer,None
None,None,Fair Oaks,California,United States,39.378498,-123.341398,0.4326,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfax,Virginia,United States,38.846224,-77.306373,0.11616818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfax,Virginia,United States,38.846224,-77.306373,0.10064935,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfax,Virginia,United States,38.846224,-77.306373,0.01813186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfax,Virginia,United States,38.846224,-77.306373,0.01813186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Fairfax,Virginia,United States,38.846224,-77.306373,0.10092514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Fairfield,Connecticut,United States,40.88371,-74.305982,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,62190,None,None
None,None,Fairfield,Ohio,United States,41.294307,-73.37486,0.31074227,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfield,Connecticut,United States,38.249358,-122.039966,0.14147018,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fairfield,New Jersey,United States,41.294307,-73.37486,0.03551401,public,Domestic,Day,Unafilliated,Co-Ed,0,Field Hockey,None
Sorority,Zeta Tau Alpha,Fairfield,California,United States,41.294307,-73.37486,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19800,None,None
Sorority,Delta Gamma,Fairfield,Connecticut,United States,39.788611,-82.641888,NA,private,Domestic,Day,Unafilliated,Co-Ed,18750,None,None
None,None,Faisalabad,NA,Pakistan,31.422056,73.092325,NA,private,International,Boarding,Catholic,All-Girls,47732.24,None,None
Sorority,Alpha Phi,Falls Church,Virginia,United States,38.882334,-77.171091,0.0815637,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fargo,North Dakota,United States,46.877229,-96.789821,0.16279069,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Farmingdale,New York,United States,40.731786,-73.448158,0.24136152,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Farmington,New Mexico,United States,41.719822,-72.832043,0.45842217,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Farmington,Connecticut,United States,36.730429,-108.208919,0.11471519,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fayetteville,Georgia,United States,35.052993,-78.878706,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25800,None,None
None,None,Fayetteville,North Carolina,United States,35.052993,-78.878706,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,15290,None,None
None,None,Fayetteville,North Carolina,United States,35.052993,-78.878706,0.54375,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fayetteville,North Carolina,United States,35.052993,-78.878706,0.45181674,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fayetteville,North Carolina,United States,35.052993,-78.878706,0.45181674,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fayetteville,North Carolina,United States,33.448726,-84.454926,0.441042345,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fayetteville,North Carolina,United States,35.052993,-78.878706,0.28490468,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Fayetteville,North Carolina,United States,35.052993,-78.878706,NA,private,Domestic,Day,Unafilliated,Co-Ed,15290,None,None
Fraternity,Sigma Phi Epsilon,Fayetteville,North Carolina,United States,35.052993,-78.878706,0.28490468,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fes,NA,Morocco,34.034116,-5.013348,NA,private,International,Boarding,Unafilliated,Co-Ed,30900,None,University
Fraternity,Delta Sigma Phi,Flemington,New Jersey,United States,40.512326,-74.859332,0.06769635,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
None,None,Flint,Michigan,United States,43.017177,-83.723602,0.2,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Florence,South Carolina,United States,34.1987,-79.7677,0.61003521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Trinity
None,None,Florence,South Carolina,United States,34.1987,-79.7677,0.61003521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Florence,South Carolina,United States,34.1987,-79.7677,0.61003521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Florissant,Missouri,United States,38.789217,-90.322614,0.49389002,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Flower Mound,Texas,United States,33.014567,-97.096955,0.09661989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Forest Grove,Oregon,United States,45.519745,-123.11144,0.50581395,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fort Belvoir,Virginia,United States,38.710739,-77.143676,0.5191447,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Track,None
None,None,Fort Belvoir,Virginia,United States,38.710739,-77.143676,0.5191447,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fort Collins,Colorado,United States,40.550853,-105.066808,0.09432989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
None,None,Fort Collins,Colorado,United States,40.550853,-105.066808,0.09432989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
Fraternity,Alpha Epsilon Pi,Fort Collins,Colorado,United States,40.550853,-105.066808,0.09432989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fort Lauderdale,Florida,United States,26.122308,-80.143379,0.65084586,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fort Mill,South Carolina,United States,35.00737,-80.945076,Data not available,private,Domestic,Day,Pentecostal,Co-Ed,5555,None,None
None,None,Fort Mill,South Carolina,United States,35.00737,-80.945076,Data not available,private,Domestic,Day,Catholic,Co-Ed,9200,None,None
None,None,Fort Mill,South Carolina,United States,35.00737,-80.945076,0.15086206,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Lacrosse,None
None,None,Fort Myers,Florida,United States,26.640628,-81.872308,Data not available,private,Domestic,Day,Catholic,Co-Ed,11400,Baseball,None
Sorority,Kappa Alpha Theta,Fort Myers,Florida,United States,26.640628,-81.872308,0.37064029,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Fort Wayne,Indiana,United States,41.07999,-85.138601,NA,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,Fort Wayne,Indiana,United States,41.07999,-85.138601,0.158633599,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fort Worth,Texas,United States,32.753177,-97.332746,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21630,None,None
None,None,Fort Worth,Texas,United States,32.753177,-97.332746,0.7118948,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Fort Worth,Texas,United States,32.753177,-97.332746,NA,private,Domestic,Day,Unafilliated,Co-Ed,22000,None,None
Fraternity,Alpha Tau Omega,Fort Worth,Texas,United States,32.753177,-97.332746,NA,private,Domestic,Day,Unafilliated,Co-Ed,22000,None,None
Fraternity,Psi Upsilon,Fortaleza,NA,Brazil,-10.456657,-67.25622,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,Karsh
Fraternity,Pi Kappa Phi,Foster,Rhode Island,United States,41.85371,-71.758125,Data not available,private,Domestic,Day,Catholic,Co-Ed,14800,None,None
None,None,Franklin,Tennessee,United States,35.924864,-86.867691,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22506,None,None
Sorority,Delta Gamma,Franklin,Tennessee,United States,35.924864,-86.867691,0.02,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Franklin Park,New Jersey,United States,40.438994,-74.535155,Data not available,private,Domestic,Day,Catholic,Co-Ed,13500,None,None
None,None,Fredericksburg,Virginia,United States,38.303184,-77.46054,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22300,Field Hockey,None
None,None,Fredericksburg,Virginia,United States,38.303184,-77.46054,0.23511293,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fremont,California,United States,37.54827,-121.988572,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,45877,None,None
None,None,Fremont,California,United States,37.54827,-121.988572,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,45877,None,None
None,None,Fremont,California,United States,37.54827,-121.988572,Data not available,private,Domestic,Day,Catholic,All-Girls,17930,None,None
None,None,Fremont,California,United States,37.54827,-121.988572,0.21167485,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fresno,California,United States,36.748793,-119.71484,0.1665,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Frisco,Texas,United States,33.150674,-96.823612,0.10072639,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Frisco,Texas,United States,33.150674,-96.823612,0.14432234,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fruitland,New Mexico,United States,36.739168,-108.395635,0.94846625,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fullerton,California,United States,33.870822,-117.929416,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39815,None,None
None,None,Fullerton,California,United States,33.870822,-117.929416,0.54849187,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Fullerton,California,United States,33.870822,-117.929416,0.54849187,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fulton,Maryland,United States,39.150941,-76.923031,0.072,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Fussa-shi,NA,Japan,35.743225,139.325183,NA,private,International,Day,Inter-/Non-denominational,Co-Ed,8789.382,None,None
None,None,Gainesville,Florida,United States,38.79515,-77.61414,0.5071736,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gainesville,Georgia,United States,29.651907,-82.324798,0.27702089,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gainesville,Florida,United States,34.297879,-83.824066,0.276895143,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gainesville,Virginia,United States,29.651907,-82.324798,0.11785095,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gaithersburg,Maryland,United States,39.143441,-77.20137,0.3786307,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gaithersburg,Maryland,United States,39.143441,-77.20137,0.2053734,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Garden City,New York,United States,40.726648,-73.634305,Data not available,private,Domestic,Boarding,Episcopal,All-Boys,59600,Men's Lacrosse,None
None,None,Garden City,New York,United States,40.726648,-73.634305,0.02274642,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Gastonia,North Carolina,United States,35.262082,-81.1873,0.31789282,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Swimming,None
Sorority,Gamma Phi Beta,Gatlinburg,Tennessee,United States,35.714259,-83.510164,0.42,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Germantown,Maryland,United States,39.173162,-77.27165,NA,private,Domestic,Day,Quaker,Co-Ed,39360,None,None
None,None,Germantown,Maryland,United States,39.173162,-77.27165,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
None,None,Gilmer,Texas,United States,32.728747,-94.942438,0.52668539,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Gjettum,NA,Norway,59.907256,10.528389,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,Men's Soccer,None
Fraternity,Sigma Phi Epsilon,Gladwyne,Pennsylvania,United States,40.040667,-75.279071,0.1169844,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Glastonbury,Connecticut,United States,41.712322,-72.608146,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,60480,None,None
Sorority,Gamma Phi Beta,Glen Allen,Virginia,United States,37.665978,-77.506374,0.50997652,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Golden,Colorado,United States,39.755543,-105.2211,0.4906015,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Goldsboro,North Carolina,United States,35.384884,-77.992765,0.49476688,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Alpha Epsilon,Grafton,Massachusetts,United States,42.207039,-71.685624,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,36020,None,None
None,None,Grafton,Massachusetts,United States,42.207039,-71.685624,0.049,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
Sorority,Kappa Alpha Theta,Grafton,Wisconsin,United States,43.319727,-87.953423,0.0697074,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Graham,North Carolina,United States,36.069026,-79.400576,0.2,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Granada Hills,California,United States,34.264725,-118.523141,0.50521542,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Grand Junction,Colorado,United States,39.063956,-108.550732,0.34405514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Granger,Indiana,United States,41.752274,-86.1142,0.23252369,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Granville,Ohio,United States,40.068119,-82.519604,0.09274673,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Grayslake,Illinois,United States,42.343352,-88.041219,0.1190965,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Grayson,Georgia,United States,33.894273,-83.95574,0.37658113,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Great Falls,Virginia,United States,38.998165,-77.288316,Data not available,private,Domestic,Day,Catholic,All-Boys,21475,None,None
Sorority,Alpha Delta Pi,Great Falls,Montana,United States,47.504885,-111.291891,NA,private,Domestic,Day,Catholic,Co-Ed,9016,None,None
Sorority,Delta Gamma,Great Neck,New York,United States,40.800657,-73.728465,0.12561576,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Greensboro,North Carolina,United States,36.072636,-79.791975,NA,private,Domestic,Boarding,Episcopal,Co-Ed,56400,None,None
None,None,Greensboro,North Carolina,United States,36.072636,-79.791975,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,56400,Men's Tennis,None
None,None,Greensboro,North Carolina,United States,36.072636,-79.791975,0.66489361,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greensboro,North Carolina,United States,36.072636,-79.791975,0.38976148,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greensboro,North Carolina,United States,36.072636,-79.791975,0.1010101,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Greensboro,North Carolina,United States,36.072636,-79.791975,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21700,None,None
Sorority,Kappa Alpha Theta,Greensboro,North Carolina,United States,36.072636,-79.791975,0.46734397,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenville,South Carolina,United States,35.612661,-77.366354,0.32285012,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Greenville,South Carolina,United States,34.851354,-82.398488,Data not available,private,Domestic,Day,Episcopal,Co-Ed,19340,None,None
Fraternity,Alpha Epsilon Pi,Greenville,North Carolina,United States,35.612661,-77.366354,NA,private,Domestic,Day,Unafilliated,Co-Ed,12801,None,None
Sorority,Alpha Phi,Greenville,North Carolina,United States,34.851354,-82.398488,NA,private,Domestic,Day,Unafilliated,Co-Ed,10400,None,None
Sorority,Gamma Phi Beta,Greenville,North Carolina,United States,35.612661,-77.366354,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,10400,None,None
Fraternity,Pi Kappa Phi,Greenville,South Carolina,United States,34.851354,-82.398488,0.54480286,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Greenville,North Carolina,United States,35.612661,-77.366354,0.51180555,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Trinity
Sorority,Kappa Alpha Theta,Greenville,North Carolina,United States,35.612661,-77.366354,0.51180555,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Track,None
Fraternity,Pi Kappa Phi,Greenville,North Carolina,United States,35.612661,-77.366354,0.51180555,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Greenwich,Connecticut,United States,41.026486,-73.62846,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56600,None,None
Sorority,Pi Beta Phi,Greenwich,Connecticut,United States,41.026486,-73.62846,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,44225,None,None
Sorority,Pi Beta Phi,Greenwich,Connecticut,United States,41.026486,-73.62846,Data not available,private,Domestic,Day,Unafilliated,All-Girls,41890,None,None
Fraternity,Alpha Tau Omega,Greenwich,Connecticut,United States,41.026486,-73.62846,NA,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
Fraternity,Sigma Nu,Greenwich,Connecticut,United States,41.026486,-73.62846,Data not available,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
Fraternity,Sigma Nu,Greenwich,Connecticut,United States,41.026486,-73.62846,Data not available,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
None,None,Greenwich,Connecticut,United States,41.026486,-73.62846,0.14954018,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenwich,Connecticut,United States,41.026486,-73.62846,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenwich,Connecticut,United States,41.026486,-73.62846,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenwood,Mississippi,United States,33.516232,-90.179528,1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenwood Village,Colorado,United States,39.61721,-104.950814,0.12293211,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
Fraternity,Psi Upsilon,Greenwood Village,Colorado,United States,39.61721,-104.950814,0.12293211,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Greenwood Village,Colorado,United States,39.61721,-104.950814,0.12293211,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
Sorority,Kappa Kappa Gamma,Greenwood Village,Colorado,United States,39.61721,-104.950814,0.12293211,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Guangzhou,NA,China,23.130004,113.259001,NA,private,International,Day,Unafilliated,Co-Ed,23053.9,None,None
None,None,Guangzhou City,NA,China,23.22589,113.533051,NA,private,International,Day,Unafilliated,Co-Ed,32400,None,None
Sorority,Delta Gamma,Guaynabo,Puerto Rico,United States,18.366921,-66.11395,NA,private,Domestic,Day,Unafilliated,Co-Ed,13133,None,None
None,None,Guilford,Connecticut,United States,41.288987,-72.681762,NA,private,International,Day,Unafilliated,Co-Ed,24955.32,None,None
None,None,Gwacheon,NA,South Korea,37.428904,126.988166,NA,private,International,Day,Unafilliated,Co-Ed,54915.87,None,None
Sorority,Pi Beta Phi,Gwynedd Valley,Pennsylvania,United States,40.184275,-75.256288,0.17460317,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Gyeonggi-do,NA,South Korea,37.270046,127.103348,NA,private,International,Day,Inter-/Non-denominational,Co-Ed,25819.75,None,None
None,None,Gyeonggi-do,NA,South Korea,37.270046,127.103348,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,57785,None,None
None,None,Hacienda Heights,California,United States,33.993068,-117.968675,0.57054455,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Haerbin City,NA,China,45.367523,127.40599,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Haidian,NA,China,40.045854,116.199546,NA,Data not available,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Haidian,NA,China,40.045854,116.199546,NA,public,International,Data not available,Data not available,Co-Ed,9187.8,None,None
None,None,Hamburg,New York,United States,42.72435,-78.828078,0.277884,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hangzhou City,NA,China,29.883305,119.479685,NA,private,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Hanoi,NA,Vietnam,20.974901,105.675563,NA,private,International,Boarding,Unafilliated,Co-Ed,37000,None,None
None,None,Hanoi,NA,Vietnam,20.974901,105.675563,NA,public,International,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Alpha Delta Pi,Hanover Park,Illinois,United States,41.999472,-88.145073,0.51288659,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Happy Valley,NA,Hong Kong,22.268464,114.186029,NA,private,International,Boarding,Unafilliated,All-Girls,48196,None,None
None,None,Harrington Park,New Jersey,United States,40.983709,-73.97986,0.0464,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Harrison,New York,United States,40.968987,-73.71263,0.13182674,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Harvard,Massachusetts,United States,42.500092,-71.582844,0.030985915,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Haverford,Pennsylvania,United States,40.013167,-75.294352,Data not available,private,Domestic,Day,Unafilliated,All-Boys,38000,None,None
None,None,Hawthorn Woods,Illinois,United States,42.216969,-88.049521,0.1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Healdsburg,California,United States,38.603921,-122.880436,NA,private,Domestic,Day,Catholic,Co-Ed,15453,None,None
Sorority,Alpha Phi,Henrico,Virginia,United States,37.545519,-77.423412,NA,private,Domestic,Day,Unafilliated,Co-Ed,24980,None,None
None,None,Henrico,Virginia,United States,37.545519,-77.423412,0.24286546,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Henrico,Virginia,United States,37.545519,-77.423412,0.12534511,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Henrico,Virginia,United States,37.545519,-77.423412,0.02,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
Fraternity,Delta Tau Delta,Henryetta,Oklahoma,United States,35.439826,-95.981943,0.61754386,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hermosa Beach,California,United States,33.86428,-118.39591,0.03377036,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Herndon,Virginia,United States,38.969532,-77.385948,0.11616818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hewitt,Texas,United States,31.46239,-97.195838,0.70546318,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hialeah,Florida,United States,25.857596,-80.278106,0.80944055,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hialeah,Florida,United States,25.857596,-80.278106,0.7417962,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Hickory,North Carolina,United States,35.73319,-81.341201,0.47151277,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Hicksville,New York,United States,40.768433,-73.525125,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,High Point,North Carolina,United States,35.955692,-80.005318,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,11250,None,None
None,None,High Point,North Carolina,United States,35.955692,-80.005318,0.46009715,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,High Point,North Carolina,United States,35.955692,-80.005318,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,17990,None,Trinity
None,None,Hilliard,Ohio,United States,40.033814,-83.159611,0.22118849,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hilliard,Ohio,United States,40.033814,-83.159611,0.21965699,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Hillsborough,California,United States,36.075418,-79.099735,NA,private,Domestic,Day,Unafilliated,Co-Ed,42430,None,None
None,None,Hillsborough,California,United States,37.574103,-122.379416,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42830,Women's Track,None
None,None,Hillsborough,New Jersey,United States,36.075418,-79.099735,Data not available,private,Domestic,Day,Catholic,All-Girls,20000,None,None
None,None,Hillsborough,North Carolina,United States,40.477604,-74.626824,0.38545454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hillsborough,North Carolina,United States,37.574103,-122.379416,0.30094583,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hillsborough,California,United States,37.574103,-122.379416,0.1806,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Kappa Epsilon,Hingham,Massachusetts,United States,42.241767,-70.889768,0.0846473,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
None,None,Ho Chi Minh City,NA,Vietnam,10.77548,106.702145,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Karsh
None,None,Hoboken,New Jersey,United States,40.743307,-74.032375,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hockessin,Delaware,United States,39.787611,-75.6966,Data not available,private,Domestic,Day,Catholic,Co-Ed,12600,None,None
None,None,Hockessin,Delaware,United States,39.787611,-75.6966,0.02263374,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hollis Center,Maine,United States,43.605081,-70.59311,0.3807,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Holmdel,New Jersey,United States,40.34511,-74.184032,0.04105263,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Holmdel,New Jersey,United States,40.34511,-74.184032,0.04105263,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Holmdel,New Jersey,United States,40.34511,-74.184032,0.02739726,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Hong Kong,NA,Hong Kong,22.279328,114.162813,NA,private,International,Day,Unafilliated,Co-Ed,20130.77,None,None
None,None,Hong Kong,NA,Hong Kong,22.279328,114.162813,NA,private,International,Day,Unafilliated,Co-Ed,23988.24,None,None
None,None,Honolulu,Hawaii,United States,21.304547,-157.855676,0.23088344,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Sigma,Hoover,Alabama,United States,33.350653,-86.883367,0.2281,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hopewell Junction,New York,United States,41.583982,-73.808744,0.03574542,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Horseheads,New York,United States,42.167019,-76.820512,0.34474708,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Houston,Texas,United States,29.758938,-95.367697,NA,private,Domestic,Day,Unafilliated,Co-Ed,27545,None,None
Fraternity,Pi Kappa Phi,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
Fraternity,Sigma Nu,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
Fraternity,Kappa Alpha Order,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Catholic,All-Boys,19200,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56500,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27545,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27545,Men's Basketball,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27545,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25387,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25387,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.79,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.4749,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.26357827,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.26357827,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.17070168,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.10807692,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Houston,Texas,United States,29.758938,-95.367697,0.10807692,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hudson,Ohio,United States,41.240056,-81.440667,0.19423368,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Humble,Texas,United States,29.998831,-95.262155,0.7983,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hung Hom,NA,Hong Kong,22.305747,114.185267,NA,public,International,Day,Unafilliated,Co-Ed,40681.74,None,None
None,None,Huntersville,North Carolina,United States,35.410714,-80.842848,0.57522594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
Fraternity,Sigma Alpha Epsilon,Huntersville,North Carolina,United States,35.410714,-80.842848,0.16021198,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Huntsville,Alabama,United States,34.677972,-86.455462,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19490,None,None
None,None,Hurricane,West Virginia,United States,38.43259,-82.020137,0.29642248,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Hydes,Maryland,United States,39.483996,-76.493298,0.17,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Icheon,NA,South Korea,37.280882,127.442913,NA,private,International,Boarding,Unafilliated,Co-Ed,NA,None,None
Sorority,Zeta Tau Alpha,Indianapolis,Indiana,United States,39.768333,-86.15835,Data not available,private,Domestic,Day,Catholic,Co-Ed,9120,None,None
None,None,Ipswich,Massachusetts,United States,42.679273,-70.841158,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,58920,None,None
None,None,Irmo,South Carolina,United States,34.085736,-81.18249,0.11438474,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Sigma,Irmo,South Carolina,United States,34.085736,-81.18249,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Irvine,California,United States,33.685697,-117.825982,NA,private,International,Day,Unafilliated,Co-Ed,31424.07,None,None
None,None,Irvine,California,United States,33.685697,-117.825982,0.18940137,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Irvine,California,United States,33.685697,-117.825982,0.15156311,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Irvine,California,United States,33.685697,-117.825982,0.06764841,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,20000,None,None
None,None,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,20206.5,None,None
None,None,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,20000,None,None
None,None,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,20000,None,None
None,None,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,18598.25,None,None
None,None,Istanbul,NA,Turkey,41.009633,28.965165,NA,private,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ithaca,New York,United States,42.439604,-76.496802,0.28745519,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Izmir,NA,Turkey,38.415342,27.144474,NA,private,International,Day,Unafilliated,Co-Ed,11635.28,Volleyball,None
None,None,Jacksonville,Florida,United States,30.332184,-81.655651,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,12898,Men's Basketball,None
None,None,Jar,NA,Norway,59.923902,10.617902,NA,private,International,Day,Unafilliated,Co-Ed,24955.32,None,None
None,None,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Jericho,New York,United States,40.792044,-73.539848,0.02493321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Jiaxing,NA,China,30.748217,120.751206,NA,public,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Jinhua City,NA,China,29.102471,120.010945,NA,public,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Johannesburg,NA,South Africa,-26.205,28.049722,NA,private,International,Boarding,Unafilliated,Co-Ed,30900,None,None
None,None,Johannesburg,NA,South Africa,-26.205,28.049722,NA,private,International,Day,Unafilliated,Co-Ed,26688,None,None
None,None,Johns Creek,Georgia,United States,34.070958,-84.274733,0.11442256,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Jupiter,Florida,United States,26.926705,-80.122091,Data not available,private,Domestic,Day,Catholic,Co-Ed,15453,None,None
Fraternity,Sigma Alpha Epsilon,Jupiter,Florida,United States,26.926705,-80.122091,0.2768903,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Kailua,Hawaii,United States,21.393009,-157.743326,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,23850,None,None
None,None,Kailua,Hawaii,United States,21.393009,-157.743326,Data not available,private,Domestic,Day,Episcopal,Co-Ed,21700,None,None
None,None,Kamenka,NA,Russia,53.184953,44.052896,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Kapsowar,NA,Kenya,0.9833,35.5666,NA,Data not available,International,Day,Unafilliated,Data not available,NA,None,None
None,None,Kathmandu,NA,Nepal,27.707676,85.314888,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,AB
Sorority,Gamma Phi Beta,Katonah,New York,United States,41.25877,-73.685385,0.05405405,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Katy,Texas,United States,29.785785,-95.824396,NA,private,International,Day,Unafilliated,Co-Ed,31000,None,None
None,None,Katy,Texas,United States,29.785785,-95.824396,0.09334594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Katy,Texas,United States,29.785785,-95.824396,0.09334594,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Kearney,Missouri,United States,39.36778,-94.36217,0.10987791,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
None,None,Keller,Texas,United States,32.934771,-97.251857,0.05,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Kennesaw,Georgia,United States,34.023434,-84.61549,0.27705827,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Kennesaw,Georgia,United States,34.023434,-84.61549,0.08269,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
Fraternity,Pi Kappa Alpha,Kennesaw,Georgia,United States,34.023434,-84.61549,0.45819556,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Kennett Square,Pennsylvania,United States,39.844077,-75.711221,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,62190,None,None
None,None,Kennewick,Washington,United States,46.211246,-119.137234,0.50684931,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Kentfield,California,United States,37.951996,-122.557212,Data not available,private,Domestic,Day,Catholic,Co-Ed,21290,None,None
None,None,Kernersville,North Carolina,United States,36.119859,-80.073653,0.49939024,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ketchum,Idaho,United States,43.680741,-114.363662,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,29000,None,None
Sorority,Delta Gamma,Key Biscayne,Florida,United States,25.696835,-80.163526,NA,private,Domestic,Day,Catholic,All-Girls,31800,None,None
Fraternity,Sigma Alpha Epsilon,Key West,Florida,United States,24.562557,-81.772437,0.36546521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Khartoum,NA,Sudan,15.593325,32.53565,NA,private,International,Day,Unafilliated,Co-Ed,25042.47,None,None
None,None,Kigali,NA,Rwanda,-1.92982,30.134538,NA,public,International,Day,Unafilliated,All-Girls,531,None,None
None,None,Kildeer,Illinois,United States,42.170581,-88.047853,0.1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Kill Devil Hills,North Carolina,United States,36.030723,-75.67601,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
Sorority,Zeta Tau Alpha,Killington,Vermont,United States,43.677568,-72.779825,0.21613832,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,King George,Virginia,United States,38.278631,-77.175356,0.27773584,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Kingsport,Tennessee,United States,36.548434,-82.561819,0.31,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Knoxville,Tennessee,United States,35.960395,-83.921026,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,18420,None,None
None,None,Kuala Lumpur,NA,Malaysia,3.157098,101.700953,NA,private,International,Boarding,Unafilliated,Co-Ed,61949.97,None,None
None,None,Kunshan,NA,China,31.386108,120.94823,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Kurashiki-shi,NA,Japan,34.586183,133.776957,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,La Canada Flintridge,California,United States,34.19983,-118.200524,0.01046622,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,La Canada Flintridge,California,United States,34.19983,-118.200524,0.01046622,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,La Fayette,Georgia,United States,33.389927,-84.495376,0.64096185,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,La Mirada,California,United States,33.906097,-118.010709,Data not available,private,Domestic,Day,Catholic,All-Boys,20025,None,None
Fraternity,Sigma Nu,Laguna Hills,California,United States,33.594876,-117.688207,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,53900,None,None
Fraternity,Delta Tau Delta,Laguna Hills,California,United States,33.594876,-117.688207,Data not available,private,Domestic,Day,Catholic,Co-Ed,13900,None,None
Sorority,Alpha Delta Pi,Laguna Niguel,California,United States,33.522526,-117.707553,0.2165,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lahore,NA,Pakistan,31.562192,74.322852,NA,private,International,Day,Unafilliated,All-Boys,"1,094.79",None,None
None,None,Lahore,NA,Pakistan,31.562192,74.322852,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lake Forest,Illinois,United States,42.258634,-87.840625,0.03524492,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lake Mary,Florida,United States,28.756633,-81.338881,0.47637415,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lake Oswego,Oregon,United States,45.420675,-122.67065,0.0799069,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lake Worth,Florida,United States,26.621213,-80.062673,0.39315949,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lake Worth,Florida,United States,26.621213,-80.062673,0.3281,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lakeland,Florida,United States,28.039465,-81.949804,0.472,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lakeville,Minnesota,United States,44.650051,-93.243279,0.0766685,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Lakewood,Colorado,United States,39.624609,-105.084204,0.3475,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lakewood Ranch,Florida,United States,27.458781,-82.432342,0.36931131,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
None,None,Land O Lakes,Florida,United States,28.218899,-82.457594,0.32058823,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Lantzville,NA,Canada,49.250004,-124.071613,NA,private,International,Boarding,Unafilliated,Co-Ed,39797.12,Rowing,None
None,None,Larchmont,New York,United States,40.927877,-73.751798,0.1659919,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Larchmont,New York,United States,40.927877,-73.751798,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Las Vegas,Nevada,United States,36.166286,-115.149225,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Las Vegas,Nevada,United States,36.166286,-115.149225,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Las Vegas,Nevada,United States,36.166286,-115.149225,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Las Vegas,Nevada,United States,36.166286,-115.149225,Data not available,private,Domestic,Day,Catholic,Co-Ed,12900,Women's Swimming,None
None,None,Las Vegas,Nevada,United States,36.166286,-115.149225,0.3984,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Las Vegas,Nevada,United States,36.166286,-115.149225,0.5936073,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Laurel,Maryland,United States,39.099275,-76.848306,0.0829,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Alpha Epsilon,Lavon,Texas,United States,33.027619,-96.434152,Data not available,private,Domestic,Day,Episcopal,All-Boys,29496,None,None
None,None,Lawrenceville,Georgia,United States,33.956215,-83.987962,0.41518424,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
None,None,Lawrenceville,Georgia,United States,33.956215,-83.987962,0.41002117,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lawrenceville,Georgia,United States,33.956215,-83.987962,0.31329803,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Lawrenceville,Georgia,United States,33.956215,-83.987962,0.41518424,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Lawrenceville,Georgia,United States,33.956215,-83.987962,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Leavenworth,Kansas,United States,39.311092,-94.9228,0.45878136,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lees Summit,Missouri,United States,38.910841,-94.382172,0.2332,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Leesburg,Virginia,United States,39.11545,-77.564545,0.17601646,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Leesburg,Virginia,United States,39.11545,-77.564545,0.17601646,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lenoir,North Carolina,United States,35.91402,-81.538985,0.52184466,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lewis Center,Ohio,United States,40.198396,-83.010184,Data not available,private,Domestic,Day,Catholic,All-Boys,10195,None,None
None,None,Lewisville,Texas,United States,33.046233,-96.994174,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,30750,None,None
Sorority,Alpha Delta Pi,Lexington,Kentucky,United States,42.447318,-71.2245,NA,private,Domestic,Day,Catholic,Co-Ed,11200,None,None
None,None,Lexington,North Carolina,United States,42.447318,-71.2245,0.444444,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lexington,Kentucky,United States,38.046407,-84.497039,0.37915129,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lexington,Kentucky,United States,38.046407,-84.497039,0.37915129,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lexington,South Carolina,United States,38.046407,-84.497039,0.18485,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lexington,Massachusetts,United States,35.824027,-80.253384,0.07835642,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lexington,Massachusetts,United States,38.046407,-84.497039,0.07835642,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Lexington,Kentucky,United States,33.981537,-81.236211,0.37915129,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Liberty,Missouri,United States,39.24635,-94.418937,0.17219313,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Lightwater,NA,United Kingdom,54.653113,-2.697959,NA,private,International,Boarding,Unafilliated,All-Boys,52388.29,None,None
Sorority,Chi Omega,Lilburn,Georgia,United States,33.890104,-84.142972,0.284754673,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Linwood,New Jersey,United States,39.33984,-74.575148,Data not available,private,Domestic,Day,Catholic,Co-Ed,8950,None,Robertson
None,None,Lisle,Illinois,United States,41.801141,-88.074787,0.17157712,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Little Elm,Texas,United States,33.162619,-96.937505,0.42282958,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Little Falls,New Jersey,United States,40.868988,-74.208201,Data not available,private,Domestic,Day,Catholic,Co-Ed,12800,None,None
Fraternity,Alpha Epsilon Pi,Little River,South Carolina,United States,34.56178,-82.075292,0.57012888,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Little Rock,Arkansas,United States,34.746481,-92.289595,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,10320,None,None
Sorority,Kappa Kappa Gamma,Little Rock,Arkansas,United States,34.746481,-92.289595,0.4974,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Little Silver,New Jersey,United States,40.336777,-74.047084,Data not available,private,Domestic,Day,Catholic,All-Boys,14975,None,None
None,None,Livingston,New Jersey,United States,40.795934,-74.314871,0.01570964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Livingston,New Jersey,United States,40.795934,-74.314871,0.01570964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Locust Valley,New York,United States,40.875932,-73.597071,Data not available,private,Domestic,Day,Quaker,Co-Ed,34100,None,None
None,None,Loma Linda,California,United States,34.075493,-117.24586,0.55380017,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Alpha Phi,London,NA,United Kingdom,37.538509,-77.43428,NA,public,International,Boarding,Catholic,All-Girls,49998,None,None
Sorority,Alpha Delta Pi,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Boarding,Unafilliated,Co-Ed,49712.53,Rowing,None
Fraternity,Alpha Delta Phi,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Day,Unafilliated,Co-Ed,40705.04,None,None
Sorority,Pi Beta Phi,London,NA,United Kingdom,51.507322,-0.127647,NA,public,International,Day,Unafilliated,Co-Ed,31477.77,None,None
Sorority,Alpha Delta Pi,London,NA,United Kingdom,51.507322,-0.127647,NA,public,International,Boarding,Unafilliated,Co-Ed,31477.77,None,None
Fraternity,Delta Sigma Phi,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Day,Unafilliated,All-Boys,29314.28,None,Robertson
Fraternity,Kappa Sigma,London,NA,United Kingdom,42.988097,-81.246029,NA,private,International,Day,Unafilliated,All-Boys,29314.28,None,None
Sorority,Kappa Kappa Gamma,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Day,Unafilliated,Co-Ed,28523.86,None,None
Sorority,Alpha Phi,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Boarding,Unafilliated,Co-Ed,118660.78,None,None
None,None,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Boarding,Unafilliated,All-Boys,52388.29,None,None
None,None,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Day,Methodist,All-Girls,44464.48,Women's Tennis,None
None,None,London,NA,United Kingdom,51.507322,-0.127647,NA,private,International,Day,Unafilliated,All-Boys,29314.28,None,None
None,None,London,NA,Canada,51.507322,-0.127647,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Lone Tree,Colorado,United States,39.536644,-104.885521,0.02204408,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Long Beach,New York,United States,40.588512,-73.657861,0.25830815,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Kappa Alpha Theta,Long Valley,New Jersey,United States,40.785933,-74.780164,0.01231716,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Longs,South Carolina,United States,33.938505,-78.733074,0.73405535,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Longview,Texas,United States,32.500704,-94.740489,0.52291666,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Longwood,Florida,United States,28.700723,-81.349278,0.37707281,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lorton,Virginia,United States,38.704282,-77.22776,0.177690875,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Los Altos,California,United States,37.379063,-122.116578,Data not available,private,Domestic,Day,Catholic,Co-Ed,17370,None,None
None,None,Los Altos,California,United States,37.379063,-122.116578,0.203125,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Los Altos,California,United States,37.379063,-122.116578,0.203125,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Los Altos,California,United States,37.379063,-122.116578,0.203125,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37725,None,None
Fraternity,Alpha Delta Phi,Los Angeles,California,United States,34.054394,-118.243941,NA,private,Domestic,Day,Unafilliated,Co-Ed,37285,None,None
Sorority,Pi Beta Phi,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37285,None,None
Sorority,Pi Beta Phi,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,35900,Volleyball,None
Fraternity,Sigma Alpha Epsilon,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,35900,None,None
None,None,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Unafilliated,All-Girls,37950,None,None
None,None,Los Angeles,California,United States,34.054394,-118.243941,Data not available,private,Domestic,Day,Catholic,All-Girls,13800,None,None
None,None,Los Gatos,California,United States,37.226611,-121.97468,Data not available,private,Domestic,Day,Catholic,All-Boys,19665,None,None
None,None,Los Gatos,California,United States,37.226611,-121.97468,0.02876569,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lovettsville,Virginia,United States,39.272431,-77.636343,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38395,None,None
None,None,Lowell,Michigan,United States,42.933643,-85.341961,0.24810126,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
None,None,Loxahatchee,Florida,United States,26.943386,-80.122201,0.1988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Loxahatchee,Florida,United States,26.943386,-80.122201,0.1988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lubbock,Texas,United States,33.577863,-101.855166,0.43573515,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ludhiana,NA,India,30.791971,75.89292,NA,private,International,Boarding,Unafilliated,All-Boys,15258.1,None,None
None,None,Lufkin,Texas,United States,31.338624,-94.728856,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
None,None,Lufkin,Texas,United States,31.338624,-94.728856,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
Fraternity,Sigma Chi,Lutherville Timonium,Maryland,United States,39.439552,-76.615548,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,29620,None,None
Sorority,Chi Omega,Lutherville Timonium,Maryland,United States,39.439552,-76.615548,NA,private,Domestic,Day,Unafilliated,Co-Ed,28960,None,None
Sorority,Gamma Phi Beta,Lutherville Timonium,Maryland,United States,39.439552,-76.615548,0.192,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lutz,Florida,United States,28.151124,-82.461483,0.29540229,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lutz,Florida,United States,28.151124,-82.461483,0.2202662,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Lutz,Florida,United States,28.151124,-82.461483,0.2202662,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Luzhu,NA,Taiwan,22.855101,120.259367,NA,private,International,Day,Unafilliated,Co-Ed,30888.62,None,None
None,None,Maanshan City,NA,China,31.678307,118.285941,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Macon,Georgia,United States,32.840695,-83.632402,Data not available,private,Domestic,Day,Catholic,Co-Ed,12330,None,Reggie
None,None,Madison,Wisconsin,United States,32.630868,-90.004082,0.89013452,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Madison,Alabama,United States,34.773681,-86.567509,0.1849,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Madison,Mississippi,United States,43.074761,-89.383761,0.18386346,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Madison Heights,Michigan,United States,42.485869,-83.105203,0.39322916,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Madrid,NA,Spain,40.416705,-3.703582,NA,private,International,Boarding,Unafilliated,All-Boys,52388.29,None,None
None,None,Manassas Park,Virginia,United States,38.784004,-77.469711,0.55798687,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mandeville,Louisiana,United States,30.387861,-90.091894,0.25615474,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Track,None
None,None,Manhasset,New York,United States,40.797879,-73.699575,0.04761904,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Manhasset,New York,United States,40.797879,-73.699575,0.04761904,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Manhasset,New York,United States,40.797879,-73.699575,0.04761904,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Manhattan Beach,California,United States,33.895084,-118.400015,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,34270,Rowing,None
Fraternity,Delta Tau Delta,Manhattan Beach,California,United States,33.895084,-118.400015,Data not available,private,Domestic,Day,Catholic,All-Boys,20025,None,None
None,None,Manitou Springs,Colorado,United States,38.858578,-104.917873,0.09070122,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
None,None,Manlius,New York,United States,43.002011,-75.976863,0.09661835,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Manosque,NA,France,43.833803,5.782666,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Mansfield,Massachusetts,United States,42.033433,-71.21894,NA,private,Domestic,Day,Catholic,Co-Ed,10450,None,None
None,None,Maple Grove,Minnesota,United States,45.07598,-93.456105,0.11515151,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Maplewood,New Jersey,United States,40.731212,-74.273481,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37270,None,None
None,None,Maplewood,New Jersey,United States,40.731212,-74.273481,0.24725561,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
Sorority,Pi Beta Phi,Maplewood,New Jersey,United States,40.731212,-74.273481,0.24725561,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mapo-gu,NA,South Korea,37.5588,126.912759,NA,private,International,Boarding,Unafilliated,Co-Ed,15000,None,None
None,None,Marblehead,Massachusetts,United States,42.500096,-70.857825,0.1102439,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mareil Marly,NA,France,48.882323,2.076452,NA,public,International,Day,Unafilliated,Co-Ed,13094.55,None,None
None,None,Marietta,Georgia,United States,33.952847,-84.549615,0.45819556,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Marietta,Georgia,United States,33.952847,-84.549615,0.05198204,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Marion,South Carolina,United States,40.558374,-85.659144,0.920454,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Marion,Indiana,United States,34.178216,-79.400607,0.60641399,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mariposa,California,United States,37.570148,-119.903659,0.44597249,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Marlboro,New Jersey,United States,40.315388,-74.246256,0.07765667,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
Fraternity,Delta Sigma Phi,Marlton,New Jersey,United States,39.891225,-74.921832,0.11882086,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mason,Ohio,United States,39.360059,-84.309939,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,15675,None,None
None,None,Mason,Ohio,United States,39.360059,-84.309939,0.06588032,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Massapequa,New York,United States,40.680656,-73.474291,NA,private,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,Alpha Tau Omega,Massapequa Park,New York,United States,40.680379,-73.455124,Data not available,private,Domestic,Day,Catholic,All-Boys,12685,None,None
None,None,Matthews,North Carolina,United States,35.116813,-80.72368,0.43344545,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Matthews,North Carolina,United States,35.116813,-80.72368,0.07377049,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,None
None,None,McAllen,Texas,United States,26.204369,-98.230082,0.32,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,McLean,Virginia,United States,38.934289,-77.177633,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,44675,None,None
None,None,McLean,Virginia,United States,38.934289,-77.177633,Data not available,private,Domestic,Day,Episcopal,All-Boys,42484,Fooball,None
Sorority,Alpha Delta Pi,McLean,Virginia,United States,38.934289,-77.177633,0.01813186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Media,Pennsylvania,United States,39.916778,-75.387693,0.13533225,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Media,Pennsylvania,United States,39.916778,-75.387693,0.11914893,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
None,None,Medley,Florida,United States,25.840653,-80.32644,0.4649712,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Swimming,None
Sorority,Alpha Phi,Melbourne,Florida,United States,28.083627,-80.608109,0.11417322,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Melville,New York,United States,40.793432,-73.415121,0.13357778,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Memphis,Tennessee,United States,35.149022,-90.051628,Data not available,private,Domestic,Day,Episcopal,All-Girls,19850,None,None
None,None,Memphis,Tennessee,United States,35.149022,-90.051628,0.45,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Memphis,Tennessee,United States,35.149022,-90.051628,0.28,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mendham,New Jersey,United States,40.775933,-74.600714,0.0154401,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Menlo Park,California,United States,37.453827,-122.182187,Data not available,private,Domestic,Day,Catholic,Co-Ed,19500,None,None
None,None,Mequon,Wisconsin,United States,43.221909,-87.982297,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25123,None,None
None,None,Mequon,Wisconsin,United States,43.221909,-87.982297,0.07740422,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mercer Island,Washington,United States,47.576632,-122.227638,0.04519774,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Merritt Island,Florida,United States,28.266278,-80.663698,0.24955595,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mesa,Arizona,United States,33.415314,-111.831264,0.65793676,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mexico City,NA,Mexico,19.43253,-99.13321,NA,private,International,Day,Unafilliated,Co-Ed,13131.15,None,None
Sorority,Chi Omega,Miami,Florida,United States,25.774266,-80.193659,NA,private,Domestic,Day,Unafilliated,Co-Ed,36840,None,None
Sorority,Pi Beta Phi,Miami,Florida,United States,25.774266,-80.193659,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,35900,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,53900,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28266,Fooball,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.92424834,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Reggie
None,None,Miami,Florida,United States,25.774266,-80.193659,0.83885071,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.7650518,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.66851635,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.65903555,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.56631892,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.41394335,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
None,None,Miami,Florida,United States,25.774266,-80.193659,0.41394335,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.38879645,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.38879645,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miami,Florida,United States,25.774266,-80.193659,0.37174578,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
Sorority,Alpha Phi,Miami,Florida,United States,25.774266,-80.193659,0.37174578,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Miami Beach,Florida,United States,25.788144,-80.12727,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33200,None,None
None,None,Miami Beach,Florida,United States,25.788144,-80.12727,0.68443138,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Middlesbrough,NA,United Kingdom,54.576042,-1.234405,NA,public,International,Day,Unafilliated,Co-Ed,21758.89,Rowing,None
None,None,Middlesex,North Carolina,United States,35.790156,-78.203884,0.241215,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Sigma,Middletown,Delaware,United States,39.449556,-75.716321,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
Fraternity,Sigma Phi Epsilon,Middletown,Delaware,United States,39.449556,-75.716321,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57000,None,None
Sorority,Kappa Alpha Theta,Midlothian,Virginia,United States,37.506267,-77.649268,Data not available,private,Domestic,Day,Episcopal,All-Girls,25800,None,None
None,None,Midlothian,Virginia,United States,37.506267,-77.649268,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,24980,None,None
None,None,Mill Creek,Washington,United States,47.857746,-122.221063,0.21,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Millburn,New Jersey,United States,40.724444,-74.306907,0.02921195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miller Place,New York,United States,40.959821,-72.996215,0.11158798,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Milton,Massachusetts,United States,42.249544,-71.066161,NA,private,Domestic,Day,Unafilliated,Co-Ed,46250,None,None
Fraternity,Alpha Delta Phi,Milton,Massachusetts,United States,42.249544,-71.066161,NA,private,Domestic,Day,Catholic,All-Boys,44850,None,None
Sorority,Kappa Kappa Gamma,Milwaukee,Wisconsin,United States,43.034993,-87.922497,Data not available,private,Domestic,Day,Catholic,All-Girls,12580,Women's Soccer,None
Sorority,Alpha Phi,Minato-ku,NA,Japan,35.643053,139.739881,NA,private,International,Day,Unafilliated,Co-Ed,22497.75,None,None
None,None,Minneapolis,Minnesota,United States,44.9773,-93.265469,Data not available,private,Domestic,Day,Episcopal,Co-Ed,28905,None,None
None,None,Minneapolis,Minnesota,United States,44.9773,-93.265469,0.62471264,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Minneapolis,Minnesota,United States,44.9773,-93.265469,0.2012158,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Lacrosse,None
Sorority,Kappa Alpha Theta,Minneapolis,Minnesota,United States,44.9773,-93.265469,0.08291708,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Miramar,Florida,United States,25.975911,-80.334721,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,26100,Fooball,None
None,None,Monmouth Beach,New Jersey,United States,40.330388,-73.981526,Data not available,private,Domestic,Day,Catholic,Co-Ed,12984,Women's Lacrosse,None
None,None,Montclair,New Jersey,United States,40.825933,-74.209034,0.18801652,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Montclair,New Jersey,United States,40.825933,-74.209034,0.18801652,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Montclair,New Jersey,United States,40.825933,-74.209034,0.18801652,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
Sorority,Kappa Kappa Gamma,Monte Sereno,California,United States,37.236333,-121.992458,0.02876569,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Montgomery,Alabama,United States,32.366966,-86.300648,0.0573,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Montville,New Jersey,United States,40.914821,-74.383763,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,9775,Men's Track,None
None,None,Mooresville,North Carolina,United States,35.570746,-80.818299,0.25913621,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Moorpark,California,United States,34.285558,-118.882041,0.18867121,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Moraga,California,United States,37.834711,-122.12956,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19800,None,None
None,None,Moraga,California,United States,37.834711,-122.12956,0.0247,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Morgantown,West Virginia,United States,39.629526,-79.955897,0.26659103,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Morgantown,West Virginia,United States,39.629526,-79.955897,0.26659103,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Morganville,New Jersey,United States,40.376498,-74.244312,Data not available,private,Domestic,Day,Catholic,All-Boys,14975,Men's Lacrosse,None
None,None,Morristown,New Jersey,United States,40.797021,-74.481011,0.27056019,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Morristown,New Jersey,United States,40.797021,-74.481011,0.27056019,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Moshi,NA,Tanzania,-3.355474,37.342604,NA,private,International,Day,Unafilliated,Co-Ed,15900,None,None
Fraternity,Sigma Nu,Mount Kisco,New York,United States,41.204262,-73.727076,Data not available,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
None,None,Mount Laurel,New Jersey,United States,39.934002,-74.890999,Data not available,private,Domestic,Day,Catholic,Co-Ed,16400,Field Hockey,None
None,None,Mount Laurel,New Jersey,United States,39.934002,-74.890999,0.15434782,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Mount Pleasant,South Carolina,United States,35.561825,-78.678622,Data not available,private,Domestic,Day,Episcopal,Co-Ed,22460,None,None
None,None,Mount Pleasant,North Carolina,United States,32.794065,-79.862585,0.36943441,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Mount Pleasant,South Carolina,United States,32.794065,-79.862585,0.13086038,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Alpha Epsilon,Mount Pleasant,South Carolina,United States,32.794065,-79.862585,0.13086038,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Mount Sinai,New York,United States,40.947043,-73.029549,0.06388206,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Mountain Brook,Alabama,United States,33.500938,-86.752211,NA,private,Domestic,Day,Unafilliated,Co-Ed,21552,None,None
None,None,Mountain Brook,Alabama,United States,33.500938,-86.752211,0,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
None,None,Mountain Lakes,New Jersey,United States,40.894821,-74.432931,0.01445086,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Lacrosse,None
None,None,Moyock,North Carolina,United States,36.524597,-76.178268,0.30041152,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Mumbai,NA,India,18.95238,72.832711,NA,private,International,Day,Unafilliated,Co-Ed,10559.2,None,None
None,None,Mumbai,NA,India,18.95238,72.832711,NA,private,International,Day,Unafilliated,Co-Ed,7047.04,None,None
None,None,Mumbai,NA,India,18.95238,72.832711,NA,private,International,Day,Unafilliated,Co-Ed,"25,009.90",None,None
None,None,Mundelein,Illinois,United States,42.263079,-88.003965,0.3904209,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Munster,Indiana,United States,41.56448,-87.512541,0.16819973,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Murfreesboro,Tennessee,United States,35.915517,-86.444693,0.09,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Nanjing,NA,China,32.060916,118.791607,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Nanjing,NA,China,32.060916,118.791607,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Naperville,Illinois,United States,41.772911,-88.147867,0.10235812,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Naperville,Illinois,United States,41.772911,-88.147867,0.10235812,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Naples,Florida,United States,26.142036,-81.79481,NA,private,Domestic,Day,Unafilliated,Co-Ed,26800,None,None
None,None,Naples,Florida,United States,26.142036,-81.79481,0.2752,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Naples,Florida,United States,26.142036,-81.79481,0.23695758,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Nashville,Tennessee,United States,36.16223,-86.774353,Data not available,private,Domestic,Day,Unafilliated,All-Girls,26240,None,None
None,None,Nashville,Tennessee,United States,36.16223,-86.774353,Data not available,private,Domestic,Day,Unafilliated,All-Boys,25200,None,None
None,None,Nashville,Tennessee,United States,36.16223,-86.774353,0.37,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Nashville,Tennessee,United States,36.16223,-86.774353,0.37,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Reggie
None,None,Nashville,Tennessee,United States,36.16223,-86.774353,0.29,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Track,None
None,None,Nassawadox,Virginia,United States,37.474857,-75.858264,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,11900,None,None
None,None,Needham Heights,Massachusetts,United States,42.293439,-71.23599,0.10718711,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Golf,None
Fraternity,Delta Sigma Phi,Nesoeya,NA,Norway,59.869577,10.528392,NA,private,International,Day,Unafilliated,Co-Ed,7259.45,Men's Soccer,None
None,None,New Bern,North Carolina,United States,35.108493,-77.044114,0.45904537,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,New Bern,North Carolina,United States,35.108493,-77.044114,0.41108132,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,New Canaan,Connecticut,United States,41.146763,-73.494845,NA,private,Domestic,Boarding,Episcopal,Co-Ed,56460,None,None
Sorority,Alpha Phi,New Canaan,Connecticut,United States,41.146763,-73.494845,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Sigma,New Delhi,NA,India,28.613897,77.215956,NA,private,International,Day,Unafilliated,Co-Ed,2705.32,None,None
None,None,New Delhi,NA,India,28.613897,77.215956,NA,public,International,Day,Unafilliated,Co-Ed,992.25,None,None
None,None,New Delhi,NA,India,28.613897,77.215956,NA,private,International,Day,Unafilliated,Co-Ed,5679.37,None,None
None,None,New Delhi,NA,India,28.613897,77.215956,NA,private,International,Day,Unafilliated,Co-Ed,2705.32,None,None
None,None,New Delhi,NA,India,28.613897,77.215956,NA,private,International,Boarding,Unafilliated,All-Boys,15258.1,None,None
None,None,New Haven,Connecticut,United States,41.308214,-72.925052,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42200,Men's Swimming,None
None,None,New Hope,Pennsylvania,United States,40.364273,-74.951278,0.07074137,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,New Hyde Park,New York,United States,40.735102,-73.687908,0.12561576,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,New Orleans,Louisiana,United States,29.949932,-90.070116,0.2181,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,New Orleans,Louisiana,United States,29.949932,-90.070116,0.2181,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,New Vernon,New Jersey,United States,40.745378,-74.497377,NA,private,Domestic,Day,Unafilliated,All-Girls,38995,None,None
None,None,New Vernon,New Jersey,United States,40.745378,-74.497377,Data not available,private,Domestic,Day,Catholic,All-Boys,37900,Men's Swimming,None
Fraternity,Alpha Epsilon Pi,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Boarding,Unafilliated,Co-Ed,62190,None,None
Fraternity,Delta Sigma Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56545,None,None
Fraternity,Sigma Nu,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,48600,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Episcopal,Co-Ed,47965,None,None
Fraternity,Delta Sigma Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Episcopal,Co-Ed,47965,None,None
Sorority,Pi Beta Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Episcopal,Co-Ed,47965,None,None
Fraternity,Sigma Nu,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,All-Boys,47500,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Unafilliated,Co-Ed,45100,None,None
Fraternity,Delta Sigma Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Jewish,Co-Ed,43900,None,None
Sorority,Alpha Delta Pi,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Unafilliated,All-Girls,43000,None,None
Sorority,Alpha Phi,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
Sorority,Pi Beta Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
Sorority,Pi Beta Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
Sorority,Pi Beta Phi,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,NA,private,Domestic,Day,Unafilliated,All-Girls,42285,None,None
Fraternity,Kappa Sigma,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,32950,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,NA,private,International,Day,Unafilliated,All-Boys,6932.12,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56545,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,48600,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,47540,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,All-Boys,47500,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42805,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39770,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39770,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,private,Domestic,Day,Catholic,All-Girls,17300,None,None
None,None,New York City,New York,United States,40.730599,-73.986581,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,New York City,New York,United States,40.730599,-73.986581,0.473666777,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,0.473666777,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,New York City,New York,United States,40.730599,-73.986581,0.473666777,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,New York City,New York,United States,40.730599,-73.986581,0.30530303,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,New York City City,New York,United States,40.730599,-73.986581,0.45374583,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Newark,New Jersey,United States,40.735657,-74.172367,1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Newbury Park,California,United States,34.184172,-118.910652,0.14026076,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Newport,Rhode Island,United States,41.489983,-71.313771,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,58000,None,None
None,None,Newport Beach,California,United States,33.617009,-117.92944,Data not available,private,Domestic,Day,Catholic,Co-Ed,15850,None,None
Fraternity,Kappa Alpha Order,Newport Beach,California,United States,33.617009,-117.92944,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Newport Coast,California,United States,33.631215,-117.835158,Data not available,private,Domestic,Day,Catholic,All-Boys,20025,None,None
Fraternity,Delta Kappa Epsilon,Newport News,Virginia,United States,37.016827,-76.45052,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,17790,None,None
None,None,Newport News,Virginia,United States,37.016827,-76.45052,0.45813047,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Newtown,Pennsylvania,United States,40.229068,-74.932295,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,34600,None,None
None,None,Newtown Square,Pennsylvania,United States,39.986812,-75.400763,Data not available,private,Domestic,Day,Unafilliated,All-Boys,38000,None,None
None,None,Niceville,Florida,United States,30.522651,-86.491453,0.1478481,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Niceville,Florida,United States,30.522651,-86.491453,0.1478481,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Nichols Hills,Oklahoma,United States,35.550886,-97.548932,NA,private,Domestic,Day,Episcopal,Co-Ed,19560,None,None
None,None,Niederglatt,NA,Switzerland,47.491518,8.503144,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Nolensville,Tennessee,United States,35.952285,-86.669441,0.02,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Norcross,Georgia,United States,33.941213,-84.213531,0.6741573,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Reggie
Sorority,Kappa Kappa Gamma,Norcross,Georgia,United States,33.941213,-84.213531,0.6741573,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Norcross,Georgia,United States,33.941213,-84.213531,0.3514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Norristown,Pennsylvania,United States,40.121497,-75.339905,0.77178423,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,North Fort Myers,Florida,United States,26.672867,-81.884085,0.50209205,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,North Miami Beach,Florida,United States,25.933149,-80.162546,0.81697231,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,North Potomac,Maryland,United States,39.082886,-77.264982,0.05157462,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,North Vancouver,NA,Canada,49.320037,-123.072343,NA,public,International,Day,Unafilliated,Co-Ed,0,Field Hockey,None
None,None,North York,NA,Canada,43.754326,-79.449117,NA,private,International,Day,Unafilliated,All-Boys,25864.47,None,None
Sorority,Gamma Phi Beta,Northbrook,Illinois,United States,42.129688,-87.830542,0.08250988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Norton,Virginia,United States,36.933693,-82.629896,0.5399361,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Norwalk,Connecticut,United States,41.117597,-73.407897,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,59000,None,None
None,None,Oak Park,Illinois,United States,41.885032,-87.784502,0.22648514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Oakton,Virginia,United States,38.881385,-77.300647,0.11616818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Oakton,Virginia,United States,38.881385,-77.300647,0.11616818,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Oakville,NA,Canada,43.447411,-79.666548,NA,private,International,Day,Unafilliated,Co-Ed,21511.63,None,None
None,None,Oakville,NA,Canada,43.447411,-79.666548,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Oceanside,New York,United States,40.638714,-73.64013,0.10325477,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Odessa,Florida,United States,28.183222,-82.554028,0.69131997,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Ogden,Utah,United States,41.223005,-111.973843,0.3763,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
None,None,Okemos,Michigan,United States,42.721839,-84.428183,0.19386106,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Okemos,Michigan,United States,42.721839,-84.428183,0.19386106,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Soccer,None
None,None,Old Bethpage,New York,United States,40.762599,-73.453179,0.06435006,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Old Tappan,New Jersey,United States,41.010653,-73.991249,0.008547,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Omaha,Nebraska,United States,41.258732,-95.937873,0.06781045,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Orange,California,United States,33.750038,-117.870493,0.4193989,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Oregon,Wisconsin,United States,42.925966,-89.384278,NA,private,International,Day,Catholic,Co-Ed,22109.08,None,None
None,None,Orem,Utah,United States,40.297519,-111.694468,0.31681681,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Orinda,California,United States,37.877148,-122.179689,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19800,Rowing,None
None,None,Orlando,Florida,United States,28.542118,-81.379046,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,20500,Men's Swimming,None
None,None,Orlando,Florida,United States,28.542118,-81.379046,0.43213897,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Orlando,Florida,United States,28.542118,-81.379046,0.43213897,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ottawa Hills,Ohio,United States,41.664217,-83.643269,0,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Golf,None
None,None,Overland Park,Kansas,United States,38.982228,-94.670792,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,20995,None,None
None,None,Overland Park,Kansas,United States,38.982228,-94.670792,Data not available,private,Domestic,Day,Catholic,All-Girls,12090,Volleyball,None
None,None,Overland Park,Kansas,United States,38.982228,-94.670792,0.15757878,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Overland Park,Kansas,United States,38.982228,-94.670792,0.078,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Owatonna,Minnesota,United States,44.083994,-93.226108,0.33355481,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Owings Mills,Maryland,United States,39.401075,-76.796299,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,62190,None,None
Sorority,Kappa Kappa Gamma,Owings Mills,Maryland,United States,39.401075,-76.796299,0.167643611,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Oxford,NA,United Kingdom,51.752225,-1.258303,NA,private,International,Boarding,Unafilliated,All-Boys,50172.56,None,None
None,None,Oxfordshire,NA,United Kingdom,51.833333,-1.25,NA,private,International,Day,Unafilliated,All-Boys,26199.54,None,Robertson
None,None,Oyster Bay,New York,United States,40.865819,-73.53203,Data not available,private,Domestic,Day,Catholic,All-Boys,12685,Men's Track,None
None,None,Painesville,Ohio,United States,41.724489,-81.245657,0.2359932,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
None,None,Palatine,Illinois,United States,42.110304,-88.03424,0.15441722,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Palm Beach,Florida,United States,26.62798,-80.449417,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,31030,None,None
Fraternity,Alpha Epsilon Pi,Palm City,Florida,United States,27.171393,-80.284222,0.36214185,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Palmetto Bay,Florida,United States,25.622042,-80.320996,0.37174578,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Palmetto Bay,Florida,United States,25.622042,-80.320996,0.41394335,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Palo Alto,California,United States,37.442156,-122.163447,0.07380073,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Palo Alto,California,United States,37.442156,-122.163447,0.07380073,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Palo Alto,California,United States,37.442156,-122.163447,0.08183221,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Palo Alto,California,United States,37.442156,-122.163447,0.07380073,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Palo Alto,California,United States,37.442156,-122.163447,0.07380073,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Paradise Valley,Arizona,United States,33.542801,-111.9556,Data not available,private,Domestic,Day,Catholic,Co-Ed,15980,None,None
None,None,Paradise Valley,Arizona,United States,33.542801,-111.9556,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Paradise Valley,Arizona,United States,33.542801,-111.9556,Data not available,private,Domestic,Day,Catholic,All-Girls,19014,None,None
None,None,Paradise Valley,Arizona,United States,33.542801,-111.9556,Data not available,private,Domestic,Day,Catholic,All-Girls,19014,None,None
None,None,Paradise Valley,Arizona,United States,33.542801,-111.9556,Data not available,private,Domestic,Day,Catholic,All-Girls,19014,None,None
None,None,Paradise Valley,Arizona,United States,33.542801,-111.9556,0.0521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Paradise Valley,Arizona,United States,33.542801,-111.9556,0.0521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Paris,NA,France,36.302002,-88.326711,NA,private,International,Day,Unafilliated,Co-Ed,44758.74,None,None
Sorority,Delta Gamma,Paris,NA,France,48.85661,2.351499,NA,private,International,Day,Unafilliated,Co-Ed,39445.03,None,None
Sorority,Alpha Phi,Paris,NA,France,48.85661,2.351499,NA,private,International,Day,Unafilliated,Co-Ed,38118.13,Women's Fencing,None
Sorority,Pi Beta Phi,Paris,NA,France,48.85661,2.351499,NA,private,International,Day,Unafilliated,Co-Ed,23508.46,None,None
None,None,Paris,NA,France,48.85661,2.351499,NA,private,International,Day,Unafilliated,Co-Ed,23508.46,None,None
None,None,Paris,NA,France,48.85661,2.351499,NA,private,International,Day,Unafilliated,Co-Ed,23508.46,None,None
None,None,Paris,Tennessee,United States,48.85661,2.351499,0.57,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Park Hills,Missouri,United States,37.854218,-90.51818,0.59,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Park Ridge,New Jersey,United States,41.037597,-74.040696,Data not available,private,Domestic,Day,Catholic,All-Boys,14600,Wrestling,None
Fraternity,Pi Kappa Alpha,Parkersburg,West Virginia,United States,39.266742,-81.561513,0.43205944,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Parkland,Florida,United States,26.310079,-80.23727,0.2139973,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Pasadena,Maryland,United States,34.147645,-118.144478,Data not available,private,Domestic,Day,Unafilliated,All-Girls,30710,None,None
None,None,Pasadena,California,United States,39.110638,-76.550697,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
Sorority,Alpha Phi,Pataskala,Ohio,United States,39.995619,-82.674334,NA,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
Sorority,Pi Beta Phi,Pataskala,Ohio,United States,39.995619,-82.674334,0.45,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pearland,Texas,United States,29.563976,-95.28643,0.58018867,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,Pearland,Texas,United States,29.563976,-95.28643,0.26301369,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Delta Delta Delta,Pennington,New Jersey,United States,40.32844,-74.790718,NA,private,Domestic,Day,Unafilliated,Co-Ed,34600,None,None
Fraternity,Kappa Alpha Order,Pensacola,Florida,United States,30.421309,-87.216915,Data not available,private,Domestic,Day,Catholic,Co-Ed,7536,Baseball,None
Sorority,Alpha Delta Pi,Pewaukee,Wisconsin,United States,43.080565,-88.261204,0.11872705,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Phelan,California,United States,34.426298,-117.572503,0.25755216,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,None
None,None,Philadelphia,Pennsylvania,United States,39.952399,-75.16359,0.50067355,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Phoenix,Arizona,United States,33.446768,-112.075672,Data not available,private,Domestic,Day,Catholic,All-Boys,14650,None,None
None,None,Phoenix,Arizona,United States,33.446768,-112.075672,0.4757,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Phoenixville,Pennsylvania,United States,40.130382,-75.514913,0.15086388,public,Domestic,Day,Unafilliated,Co-Ed,0,Field Hockey,None
Fraternity,Alpha Tau Omega,Pikesville,Maryland,United States,39.374504,-76.722729,0.34285714,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,30425,None,None
Sorority,Zeta Tau Alpha,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28500,None,None
None,None,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,0.16985138,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Basketball,None
None,None,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,0.11281748,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,0.05475928,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Pittsburgh,Pennsylvania,United States,40.441694,-79.990086,0.16985138,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Pittsford,New York,United States,43.090959,-77.515298,Data not available,private,Domestic,Day,Catholic,All-Boys,13600,None,None
None,None,Pittsford,New York,United States,43.090959,-77.515298,0.01875617,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
Fraternity,Alpha Tau Omega,Plainfield,New Jersey,United States,40.633714,-74.407374,NA,private,Domestic,Day,Unafilliated,Co-Ed,36515,None,None
Fraternity,Sigma Alpha Epsilon,Plainfield,New Jersey,United States,40.633714,-74.407374,0.06551724,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Plainsboro,New Jersey,United States,40.333441,-74.600434,0.04619226,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Plano,Texas,United States,33.013676,-96.69251,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,30750,None,None
Fraternity,Chi Psi,Plano,Texas,United States,33.013676,-96.69251,0.48,public,Domestic,Day,Unafilliated,Co-Ed,8300,None,None
None,None,Plano,Texas,United States,33.013676,-96.69251,Data not available,private,Domestic,Day,Unafilliated,All-Girls,29000,None,None
None,None,Plano,Texas,United States,33.013676,-96.69251,0.22306579,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Plano,Texas,United States,33.013676,-96.69251,0.13501381,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Plano,Texas,United States,33.013676,-96.69251,0.13501381,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Plantation,Florida,United States,26.126526,-80.257861,Data not available,private,Domestic,Day,Catholic,Co-Ed,11900,Fooball,None
None,None,Plantation,Florida,United States,26.126526,-80.257861,0.65084586,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Plantation,Florida,United States,26.126526,-80.257861,0.58046511,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pleasanton,California,United States,37.662431,-121.874679,0.0606488,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pleasanton,California,United States,37.662431,-121.874679,0.0547,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pleasanton,California,United States,37.662431,-121.874679,0.0547,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Pleasanton,California,United States,37.662431,-121.874679,0.0606488,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Pleasanton,California,United States,37.662431,-121.874679,0.0606488,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Podmoskovye,NA,Russia,55.37767,37.772693,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Polson,Montana,United States,47.69053,-114.163761,0.40248962,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Pompano Beach,Florida,United States,26.23786,-80.124767,NA,private,Domestic,Day,Unafilliated,Co-Ed,31030,None,None
None,None,Pompano Beach,Florida,United States,26.23786,-80.124767,0.68616799,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ponte Vedra Beach,Florida,United States,30.239687,-81.385638,0.05739795,public,Domestic,Day,Unafilliated,Co-Ed,0,Baseball,None
Sorority,Zeta Tau Alpha,Ponte Vedra Beach,Florida,United States,30.239687,-81.385638,0.05739795,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Port Chester,New York,United States,41.001764,-73.665683,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39800,None,None
None,None,Port Jefferson Station,New York,United States,40.925376,-73.047328,0.21428571,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Port Washington,New York,United States,40.825656,-73.698186,0.19805825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Port Washington,New York,United States,40.825656,-73.698186,0.19805825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Porter Ranch,California,United States,34.287561,-118.552838,0.73553719,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Porter Ranch,California,United States,34.287561,-118.552838,0.50521542,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,Data not available,private,Domestic,Day,Catholic,All-Girls,14050,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,Data not available,private,Domestic,Day,Catholic,Co-Ed,13395,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,0.28950495,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,0.28950495,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,0.24179536,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Portland,Oregon,United States,45.520247,-122.674195,0.24179536,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Fencing,None
Sorority,Delta Gamma,Potomac,Maryland,United States,39.018045,-77.208905,NA,private,Domestic,Day,Unafilliated,All-Girls,40150,None,None
Sorority,Gamma Phi Beta,Potomac,Maryland,United States,39.018045,-77.208905,Data not available,private,Domestic,Day,Catholic,All-Girls,32300,None,None
None,None,Potomac,Maryland,United States,39.018045,-77.208905,0.04656985,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Delta Phi,Potomac,Maryland,United States,39.018045,-77.208905,0.04656985,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Potomac,Maryland,United States,39.018045,-77.208905,0.04656985,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Poughkeepsie,New York,United States,41.706578,-73.92841,0.1895,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Pound Ridge,New York,United States,41.208707,-73.574848,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,56460,None,None
None,None,Poway,California,United States,32.962823,-117.035865,0.20337477,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Poway,California,United States,32.962823,-117.035865,0.20337477,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Powell,Ohio,United States,40.15784,-83.075187,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,25000,None,None
None,None,Prairieville,Louisiana,United States,30.302972,-90.972045,0.24011299,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Presque Isle,Maine,United States,46.681153,-68.015862,0.42576028,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Princeton,New Jersey,United States,40.349274,-74.659296,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,51440,None,None
None,None,Princeton,New Jersey,United States,40.349274,-74.659296,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,51440,None,None
None,None,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Princeton,New Jersey,United States,40.349274,-74.659296,0.08558262,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Princeton Junction,New Jersey,United States,40.31733,-74.619879,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,34600,None,None
None,None,Providence,Rhode Island,United States,41.823989,-71.412834,NA,private,International,Day,Unafilliated,Co-Ed,2714.11,None,None
None,None,Pryor,Oklahoma,United States,36.308428,-95.316914,0.45087719,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pueblo,Colorado,United States,38.254447,-104.609141,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Pune,NA,India,18.643958,73.932568,NA,private,International,Day,Inter-/Non-denominational,Co-Ed,NA,None,None
Fraternity,Sigma Phi Epsilon,Purchase,New York,United States,41.040931,-73.714575,0.13182674,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Quakertown,Pennsylvania,United States,40.441768,-75.341567,0.28073394,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Quincy,Massachusetts,United States,42.252877,-71.00227,NA,private,Domestic,Day,Catholic,All-Boys,19700,None,None
Sorority,Kappa Alpha Theta,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
Fraternity,Sigma Chi,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,22650,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,22650,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22400,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,Data not available,private,Domestic,Day,Catholic,Co-Ed,14340,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.316360601,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Basketball,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.30844029,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Psi Upsilon,Raleigh,North Carolina,United States,35.780398,-78.639099,0.30844029,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.30844029,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.28990364,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.28990364,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Raleigh,North Carolina,United States,35.780398,-78.639099,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Raleigh,North Carolina,United States,35.780398,-78.639099,0.36032197,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
Sorority,Gamma Phi Beta,Raleigh,North Carolina,United States,35.780398,-78.639099,0.36032197,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Raleigh,North Carolina,United States,35.780398,-78.639099,0.33466533,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Raleigh,North Carolina,United States,35.780398,-78.639099,0.20824199,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Raleigh,North Carolina,United States,35.780398,-78.639099,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Rancho Palos Verdes,California,United States,33.748922,-118.367911,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,34270,None,None
Sorority,Kappa Alpha Theta,Rancho Santa Margarita,California,United States,33.640855,-117.603104,Data not available,private,Domestic,Day,Catholic,Co-Ed,15850,Women's Swimming,None
None,None,Raritan,New Jersey,United States,40.569547,-74.632936,0.080152672,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Reading,Massachusetts,United States,42.52565,-71.095331,0.07194244,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Redding,California,United States,41.302596,-73.383453,0.0606488,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Redding,Connecticut,United States,40.586356,-122.391675,0.04289799,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Redmond,Washington,United States,47.669414,-122.123877,0.24716981,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Reston,Virginia,United States,38.958402,-77.357974,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38395,None,None
Fraternity,Pi Kappa Alpha,Reston,Virginia,United States,38.958402,-77.357974,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Richardson,Texas,United States,32.948179,-96.729721,0.48850358,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Richmond,Virginia,United States,37.538509,-77.43428,Data not available,private,Domestic,Day,Episcopal,All-Girls,25800,None,None
None,None,Richmond,Virginia,United States,40.564571,-74.147961,0.02,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ridgefield,Connecticut,United States,41.281484,-73.498179,0.03440367,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ridgefield,Connecticut,United States,41.281484,-73.498179,0.03440367,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Ridgefield,Connecticut,United States,41.281484,-73.498179,0.03440367,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Reggie
Fraternity,Alpha Epsilon Pi,Ridgefield,Connecticut,United States,41.281484,-73.498179,0.03440367,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,River Falls,Wisconsin,United States,44.859511,-92.62659,0.12991266,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Riverside,Connecticut,United States,41.033708,-73.57818,Data not available,private,Domestic,Day,Unafilliated,All-Boys,40450,None,None
None,None,Riverside,Connecticut,United States,41.033708,-73.57818,0.14954018,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Lacrosse,None
None,None,Robbinsville,New Jersey,United States,40.222622,-74.589591,0.04575163,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rochester,Minnesota,United States,43.157285,-77.615214,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,7950,None,None
None,None,Rochester,Minnesota,United States,44.023327,-92.463021,0.31234567,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rochester,Minnesota,United States,44.023327,-92.463021,0.31234567,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rochester,Minnesota,United States,44.023327,-92.463021,0.23799435,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Rochester,New York,United States,44.023327,-92.463021,0.142230026,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rock Hill,South Carolina,United States,34.924867,-81.025078,0.46512794,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rockville,Maryland,United States,39.084005,-77.152757,0.05157462,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Rockville,Maryland,United States,39.084005,-77.152757,0.06896551,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rockville Centre,New York,United States,40.658714,-73.641241,0.12545787,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rogers,Arkansas,United States,36.33202,-94.118537,0.6135,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Rolling Meadows,Illinois,United States,42.084194,-88.013127,0.15441722,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Rome,Georgia,United States,34.257038,-85.164673,0.55024213,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rosemount,Minnesota,United States,44.739187,-93.12611,0.16011505,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Roslyn Heights,New York,United States,40.788712,-73.647351,0.00295858,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Roslyn Heights,New York,United States,40.788712,-73.647351,0.00295858,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Roslyn Heights,New York,United States,40.788712,-73.647351,0.04651162,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Roslyn Heights,New York,United States,40.788712,-73.647351,0.00295858,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Roswell,Georgia,United States,34.02332,-84.360022,0.24061597,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
None,None,Rotorua,NA,New Zealand,-38.138149,176.252922,NA,public,International,Day,Catholic,Co-Ed,0,None,Robertson
None,None,Rougemont,North Carolina,United States,36.218475,-78.926397,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,22650,Fooball,None
None,None,Round Rock,Texas,United States,30.572581,-97.648407,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,Women's Swimming,None
None,None,Round Rock,Texas,United States,30.572581,-97.648407,0.39991879,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Round Rock,Texas,United States,30.572581,-97.648407,0.271155261,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Royal Oak,Michigan,United States,42.48948,-83.144648,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27050,None,None
None,None,Royal Palm Beach,Florida,United States,26.701755,-80.223384,0.62635379,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Royal Palm Beach,Florida,United States,26.701755,-80.223384,0.28102429,public,Domestic,Day,Unafilliated,Co-Ed,0,None,University
Sorority,Delta Delta Delta,Rye,New York,United States,40.980821,-73.684294,NA,private,Domestic,Day,Catholic,All-Girls,46524,None,None
Fraternity,Sigma Phi Epsilon,Rye,New York,United States,40.980821,-73.684294,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,39800,None,None
Fraternity,Alpha Tau Omega,Rye,New York,United States,40.980821,-73.684294,NA,private,Domestic,Day,Catholic,All-Boys,18410,None,None
None,None,Rye,New York,United States,40.980821,-73.684294,0.03465346,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Rye,New York,United States,40.980821,-73.684294,0.03465346,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Rye,New York,United States,40.980821,-73.684294,0.03465346,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Rye Brook,New York,United States,41.019264,-73.683462,0.0821,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saco,Maine,United States,43.500918,-70.442829,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,12500,None,None
Sorority,Pi Beta Phi,Sacramento,California,United States,38.581572,-121.4944,0.21495914,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Augustine,Florida,United States,29.894691,-81.314517,0.18679549,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Charles,Missouri,United States,38.783194,-90.482368,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,27540,None,None
None,None,Saint Cloud,Florida,United States,28.249853,-81.283904,0.60763888,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Johns,Florida,United States,29.903228,-81.414547,0.1401,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Saint Louis,Missouri,United States,38.627273,-90.197889,NA,private,Domestic,Day,Unafilliated,Co-Ed,26500,None,None
None,None,Saint Louis,Missouri,United States,38.627273,-90.197889,0.15085714,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Saint Louis,Missouri,United States,38.627273,-90.197889,0.15085714,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Saint Louis,Missouri,United States,38.627273,-90.197889,0.13149606,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Paul,Minnesota,United States,44.950404,-93.101503,Data not available,private,Domestic,Day,Catholic,All-Boys,21000,Men's Lacrosse,None
None,None,Saint Paul,Minnesota,United States,44.950404,-93.101503,0.5373,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Basketball,None
Sorority,Zeta Tau Alpha,Saint Paul,Minnesota,United States,44.950404,-93.101503,0.12276657,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
Sorority,Alpha Delta Pi,Saint Paul,Minnesota,United States,44.950404,-93.101503,0.10809281,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Petersburg,Florida,United States,27.770861,-82.679266,0.39179954,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saint Petersburg,Florida,United States,27.770861,-82.679266,0.39179954,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Salisbury,North Carolina,United States,35.670973,-80.474226,0.67158671,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Salt Lake City,Utah,United States,40.767013,-111.890431,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21475,None,None
None,None,Salt Lake City,Utah,United States,40.767013,-111.890431,0.59632635,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Salt Lake City,Utah,United States,40.767013,-111.890431,0.11434511,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Angelo,Texas,United States,31.431993,-100.45458,0.09365558,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,San Antonio,Texas,United States,29.4246,-98.49514,NA,private,Domestic,Day,Episcopal,Co-Ed,23450,None,None
Fraternity,Kappa Alpha Order,San Antonio,Texas,United States,29.4246,-98.49514,Data not available,private,Domestic,Day,Episcopal,Co-Ed,23450,None,None
Fraternity,Delta Sigma Phi,San Antonio,Texas,United States,29.4246,-98.49514,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,9640,None,None
None,None,San Antonio,Texas,United States,29.4246,-98.49514,0.45911949,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,San Carlos,California,United States,37.498207,-122.26615,NA,private,Domestic,Day,Unafilliated,Co-Ed,42830,None,None
None,None,San Carlos,California,United States,37.498207,-122.26615,0.1246,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,San Diego,California,United States,32.717421,-117.162771,NA,private,Domestic,Day,Unafilliated,Co-Ed,30275,None,None
None,None,San Diego,California,United States,32.717421,-117.162771,Data not available,private,Domestic,Day,Episcopal,Co-Ed,33800,Men's Lacrosse,None
None,None,San Diego,California,United States,32.717421,-117.162771,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,6995,None,None
None,None,San Diego,California,United States,32.717421,-117.162771,0.41,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Diego,California,United States,32.717421,-117.162771,0.11607533,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,San Diego ,California,United States,35.399327,-78.815853,NA,private,International,Day,Unafilliated,Co-Ed,31228,None,None
None,None,San Francisco,California,United States,37.779277,-122.41927,NA,public,International,Boarding,Unafilliated,All-Boys,52354.83,None,None
None,None,San Francisco,California,United States,37.779277,-122.41927,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,58920,None,None
Sorority,Pi Beta Phi,San Isidro,NA,Peru,-27.436415,-55.938934,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,16040,None,None
None,None,San Isidro,NA,Peru,-27.436415,-55.938934,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,16040,None,None
None,None,San Isidro,NA,Peru,-27.436415,-55.938934,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,16040,Men's Tennis,None
Sorority,Zeta Tau Alpha,San Jose,California,United States,37.336191,-121.890583,Data not available,private,Domestic,Day,Catholic,Co-Ed,17370,None,None
None,None,San Jose,California,United States,37.336191,-121.890583,0.69439071,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Jose,California,United States,37.336191,-121.890583,0.141,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,San Jose,California,United States,37.336191,-121.890583,0.72380952,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Marcos,Texas,United States,29.882644,-97.940583,0.62025901,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Mateo,California,United States,37.496904,-122.333057,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42430,None,None
None,None,San Pedro Garza Garcia,NA,Mexico,25.665105,-100.402271,NA,private,International,Day,Catholic,All-Boys,NA,None,None
Sorority,Alpha Delta Pi,San Rafael,California,United States,37.973535,-122.531087,NA,private,Domestic,Day,Unafilliated,Co-Ed,42285,None,None
Fraternity,Pi Kappa Alpha,San Rafael,California,United States,37.973535,-122.531087,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42285,None,None
None,None,San Rafael,California,United States,37.973535,-122.531087,0.27737226,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Swimming,None
None,None,San Ramon,California,United States,37.779927,-121.978015,0.0589792,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,San Ramon,California,United States,37.779927,-121.978015,0.0589792,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,San Ramon,California,United States,37.779927,-121.978015,0.0589792,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sandy,Utah,United States,40.572851,-111.83345,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,22625,None,None
Sorority,Delta Delta Delta,Santa Ana,California,United States,33.749495,-117.873221,0.0606488,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Santa Barbara,California,United States,34.409811,-119.697024,0.30434782,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Santa Barbara,California,United States,34.409811,-119.697024,0.30434782,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Chi Psi,Santa Clara,California,United States,37.354113,-121.955174,NA,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,17750,None,None
None,None,Santa Fe,New Mexico,United States,35.687,-105.9378,Data not available,private,Domestic,Day,Catholic,Co-Ed,8360,None,University
Fraternity,Sigma Phi Epsilon,Santa Monica,California,United States,34.01956,-118.486974,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38400,None,None
None,None,Santa Monica,California,United States,34.01956,-118.486974,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38002,None,None
None,None,Santa Monica,California,United States,34.01956,-118.486974,0.29524128,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Santa Monica,California,United States,34.01956,-118.486974,0.3059829,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Santa Rosa,California,United States,38.440468,-122.714431,0.38802992,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Santa Rosa Beach,Florida,United States,30.396032,-86.228832,0.23842195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sao Paulo,NA,Brazil,-23.550651,-46.633382,NA,private,International,Day,Unafilliated,Co-Ed,32392.12,None,None
None,None,Sao Paulo,NA,Brazil,-23.550651,-46.633382,NA,private,International,Day,Unafilliated,Co-Ed,32392.12,None,None
None,None,Sao Paulo,NA,Brazil,-23.550651,-46.633382,NA,private,International,Day,Unafilliated,Co-Ed,32392.12,None,None
Sorority,Chi Omega,Sapporo,NA,Japan,43.049876,141.334297,NA,private,Domestic,Day,Unafilliated,Co-Ed,35900,None,None
Sorority,Kappa Alpha Theta,Sarasota,Florida,United States,27.336435,-82.530653,0.12763037,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saratoga,California,United States,37.263832,-122.023015,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,49880,None,None
None,None,Saratoga,California,United States,37.263832,-122.023015,0.00798258,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Saunderstown,Rhode Island,United States,41.50788,-71.4245,Data not available,private,Domestic,Day,Catholic,All-Boys,14450,None,None
None,None,Savannah,Georgia,United States,32.083541,-81.099834,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,14850,None,None
None,None,Savannah,Georgia,United States,32.083541,-81.099834,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,9500,None,None
None,None,Savannah,Georgia,United States,32.083541,-81.099834,0.10506798,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Scarsdale,New York,United States,40.96908,-73.763532,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,48600,None,None
None,None,Scarsdale,New York,United States,40.96908,-73.763532,Data not available,private,Domestic,Day,Jewish,Co-Ed,31980,None,None
None,None,Scarsdale,New York,United States,40.96908,-73.763532,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Scarsdale,New York,United States,40.96908,-73.763532,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Scarsdale,New York,United States,40.96908,-73.763532,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Scarsdale,New York,United States,40.96908,-73.763532,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Scotch Plains,New Jersey,United States,40.65538,-74.389873,0.06551724,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Scottsdale,Arizona,United States,33.509122,-111.899236,Data not available,private,Domestic,Day,Catholic,All-Boys,14650,None,AB
None,None,Scottsdale,Arizona,United States,33.509122,-111.899236,0.0521,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
None,None,Scottsdale,Arizona,United States,33.509122,-111.899236,0.0521,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Scottsdale,Arizona,United States,33.509122,-111.899236,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Scottsdale,Arizona,United States,33.509122,-111.899236,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Seattle,Washington,United States,47.603832,-122.330062,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,33850,None,None
None,None,Selebi Phikwe,NA,Botswana,-21.978571,27.837353,NA,private,International,Day,Unafilliated,Co-Ed,2834.21,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Boarding,Unafilliated,Co-Ed,NA,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,51000,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Boarding,Unafilliated,Co-Ed,18800,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Day,Unafilliated,Co-Ed,16479.66,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Boarding,Presbyterian,All-Boys,47950,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,Data not available,private,Domestic,Boarding,Unafilliated,All-Girls,42600,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Boarding,Unafilliated,Co-Ed,15000,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Boarding,Unafilliated,Co-Ed,15000,None,None
None,None,Seoul,NA,South Korea,37.566679,126.978291,NA,private,International,Day,Unafilliated,Co-Ed,5747.4,None,None
None,None,Shaker Heights,Ohio,United States,41.473942,-81.537067,0.43683917,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Shanghai,NA,China,31.225344,121.488892,NA,private,International,Day,Unafilliated,Co-Ed,46838.53,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,private,International,Day,Unafilliated,Co-Ed,8474.95,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,private,International,Day,Unafilliated,Co-Ed,38442.5,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,public,International,Day,Unafilliated,Co-Ed,11695.64,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,public,International,Day,Unafilliated,Co-Ed,11695.64,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56600,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,Data not available,private,Domestic,Boarding,Methodist,Co-Ed,53950,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Shanghai,NA,China,31.225344,121.488892,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sharjah,NA,United Arab Emirates,25.229721,55.782251,NA,private,International,Day,Unafilliated,Co-Ed,13093.46,None,None
None,None,Sharon,Massachusetts,United States,42.12371,-71.178663,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,46250,None,None
None,None,Sharon,Massachusetts,United States,42.12371,-71.178663,0.07880434,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Shelby,North Carolina,United States,35.292351,-81.535646,0.135729,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Shelton,Connecticut,United States,41.316486,-73.093164,0.21225806,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Shenzhen,NA,China,22.544267,114.054533,Data not available,private,Domestic,Boarding,Catholic,All-Boys,58445,None,None
None,None,Shenzhen,NA,China,22.544267,114.054533,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Shenzhen,NA,China,22.544267,114.054533,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Shenzhen,NA,China,22.544267,114.054533,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sherborn,Massachusetts,United States,42.238986,-71.369781,0.04072398,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Short Hills,New Jersey,United States,40.747879,-74.325427,0.02921195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Short Hills,New Jersey,United States,40.747879,-74.325427,0.02921195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Short Hills,New Jersey,United States,40.747879,-74.325427,0.02921195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Nu,Short Hills,New Jersey,United States,40.747879,-74.325427,0.02921195,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Signal Mountain,Tennessee,United States,35.121462,-85.374961,Data not available,private,Domestic,Day,Unafilliated,All-Girls,24350,None,None
None,None,Silver Spring,Maryland,United States,38.990666,-77.026088,0.2,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,60400,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,private,International,Day,Unafilliated,Co-Ed,30888.62,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,private,International,Day,Unafilliated,Co-Ed,30724.17,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,private,International,Day,Unafilliated,Co-Ed,30724.17,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,private,International,Day,Unafilliated,Co-Ed,30724.17,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,private,International,Day,Unafilliated,Co-Ed,2714.11,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
None,None,Singapore,NA,Singapore,1.290453,103.852038,NA,public,International,Day,Unafilliated,Co-Ed,2708.82,None,None
Fraternity,Delta Sigma Phi,Sisli,NA,Turkey,41.061672,28.984261,NA,private,International,Day,Unafilliated,Co-Ed,18598.25,None,None
Sorority,Kappa Alpha Theta,Somerset,New Jersey,United States,40.567508,-74.618956,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,35600,None,None
None,None,South Barrington,Illinois,United States,42.088522,-88.148404,0.2113,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,South Bend,Indiana,United States,41.683381,-86.250007,0.5831435,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
Fraternity,Pi Kappa Alpha,South Brunswick,New Jersey,United States,40.384924,-74.520475,0.10783978,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,South Orange,New Jersey,United States,40.747497,-74.263538,0.24725561,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Southborough,Massachusetts,United States,42.30565,-71.524509,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57500,Field Hockey,None
None,None,Southborough,Massachusetts,United States,42.30565,-71.524509,Data not available,private,Domestic,Boarding,Episcopal,Co-Ed,57500,None,None
Fraternity,Pi Kappa Alpha,Southhampton,New York,United States,45.931478,-66.646736,0.36877076,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Southington,Connecticut,United States,41.600544,-72.878294,0.14860835,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Southport,Connecticut,United States,41.136486,-73.283449,Data not available,private,Domestic,Day,Catholic,All-Boys,19800,None,None
Fraternity,Delta Tau Delta,Spotsylvania,Virginia,United States,38.188094,-77.674175,0.23511293,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Spring Lake,New Jersey,United States,40.153513,-74.029394,NA,private,Domestic,Day,Unafilliated,Co-Ed,32180,None,None
None,None,Springfield,Virginia,United States,39.798976,-89.644369,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,36750,None,Reggie
None,None,Springfield,Illinois,United States,38.789052,-77.187037,0,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Chi,Springfield,Ohio,United States,39.924227,-83.808817,0.71727435,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Staines,NA,United Kingdom,51.434012,-0.511044,NA,public,International,Day,Unafilliated,Co-Ed,NA,Rowing,None
Sorority,Delta Gamma,Stamford,Connecticut,United States,41.05343,-73.538734,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Pi Beta Phi,Stamford,Connecticut,United States,41.05343,-73.538734,0.48706896,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Starkville,Mississippi,United States,33.459362,-88.829854,0.98755186,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Staten Island,New York,United States,40.583456,-74.149605,Data not available,private,Domestic,Day,Catholic,All-Boys,16700,None,None
None,None,Staten Island,New York,United States,40.583456,-74.149605,0.43,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Statesville,North Carolina,United States,35.782636,-80.887296,0.25913621,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Stevensville,Maryland,United States,38.980596,-76.314441,0.08,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Stillwater,Oklahoma,United States,45.056404,-92.813498,0.35974499,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Stillwater,Minnesota,United States,36.115631,-97.058572,0.11779324,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Stillwater,Oklahoma,United States,36.115631,-97.058572,0.35974499,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Stone Mountain,Georgia,United States,33.806217,-84.14575,0.41002117,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Stone Mountain,Georgia,United States,33.806217,-84.14575,0.41002117,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Studio City,California,United States,34.148399,-118.396188,Data not available,private,Domestic,Day,Episcopal,Co-Ed,37260,None,None
Fraternity,Pi Kappa Phi,Suffern,New York,United States,41.115137,-74.149395,0.18570474,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sugar Land,Texas,United States,29.619679,-95.634946,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,8300,None,None
None,None,Sugar Land,Texas,United States,29.619679,-95.634946,0.27508996,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sugar Land,Texas,United States,29.619679,-95.634946,0.21943844,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Sugar Land,Texas,United States,29.619679,-95.634946,0.20328917,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Summerfield,North Carolina,United States,35.568217,-77.402743,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21700,None,None
Sorority,Zeta Tau Alpha,Summit,New Jersey,United States,40.71819,-74.359216,Data not available,private,Domestic,Day,Unafilliated,All-Girls,38995,None,None
None,None,Sumter,South Carolina,United States,33.920435,-80.341469,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,6760,None,None
Fraternity,Pi Kappa Phi,Sunningdale,NA,United Kingdom,51.399774,-0.631818,NA,private,International,Day,Unafilliated,Co-Ed,31424.07,None,None
Fraternity,Delta Sigma Phi,Sunnyvale,California,United States,37.36883,-122.03635,Data not available,private,Domestic,Day,Catholic,All-Boys,19665,None,None
Fraternity,Sigma Alpha Epsilon,Sunrise,Florida,United States,26.148245,-80.328886,0.58046511,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Suwanee,Georgia,United States,34.05149,-84.0713,0.3514,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Suwanee,Georgia,United States,34.05149,-84.0713,0.41518424,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Swansboro,North Carolina,United States,34.687662,-77.119117,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Swarthmore,Pennsylvania,United States,39.902057,-75.349912,0.11914893,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tahlequah,Oklahoma,United States,35.91537,-94.969956,0.63905325,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Taipei,NA,Taiwan,25.037517,121.5637,NA,private,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Taipei,NA,Taiwan,25.037517,121.5637,NA,private,International,Day,Unafilliated,Co-Ed,24977.017,None,None
None,None,Taipei,NA,Taiwan,25.037517,121.5637,NA,private,International,Day,Unafilliated,Co-Ed,24977.017,None,None
None,None,Taipei,NA,Taiwan,25.037517,121.5637,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Taipei City,NA,Taiwan,25.037517,121.5637,NA,private,International,Day,Unafilliated,Co-Ed,24977.017,None,None
None,None,Tallahassee,Florida,United States,30.438083,-84.280933,0.08751864,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Tallahassee,Florida,United States,30.438083,-84.280933,0.08751864,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Tampa,Florida,United States,27.94776,-82.458444,Data not available,private,Domestic,Day,Catholic,Co-Ed,19150,None,None
None,None,Tampa,Florida,United States,27.94776,-82.458444,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21825,None,None
None,None,Tampa,Florida,United States,27.94776,-82.458444,Data not available,private,Domestic,Day,Catholic,Co-Ed,18420,None,None
None,None,Tampa,Florida,United States,27.94776,-82.458444,0.46767457,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Tampa,Florida,United States,27.94776,-82.458444,0.50464396,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Tampa,Florida,United States,27.94776,-82.458444,0.1969957,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Taos,New Mexico,United States,36.407249,-105.573066,0.61316872,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tarpon Springs,Florida,United States,28.147789,-82.777409,0.18699187,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Tau Omega,Tarpon Springs,Florida,United States,28.147789,-82.777409,0.18699187,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Tarpon Springs,Florida,United States,28.147789,-82.777409,0.18699187,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tarzana,California,United States,34.172797,-118.553369,Data not available,private,Domestic,Day,Unafilliated,All-Girls,37950,Women's Track,None
None,None,Tashkent,NA,Uzbekistan,41.312336,69.278708,NA,private,International,Day,Unafilliated,Co-Ed,6500,None,None
None,None,Temecula,California,United States,33.494635,-117.147366,0.11902789,public,Domestic,Day,Unafilliated,Co-Ed,0,Volleyball,None
None,None,Tenafly,New Jersey,United States,40.925377,-73.962915,0.03281519,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tianjin,NA,China,39.123564,117.198079,NA,public,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Tianjin,NA,China,39.123564,117.198079,NA,public,International,Data not available,Unafilliated,Co-Ed,3840.5,None,None
None,None,Tiffin,Ohio,United States,41.114499,-83.177975,0.30346475,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Epsilon Pi,Tinton Falls,New Jersey,United States,40.289073,-74.092797,0.0124,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tokyo,NA,Japan,35.690041,139.510395,NA,private,International,Boarding,Unafilliated,Co-Ed,48499.16,None,None
None,None,Toledo,Ohio,United States,41.678675,-83.512728,Data not available,private,Domestic,Day,Catholic,Co-Ed,9450,Fooball,None
Sorority,Kappa Alpha Theta,Toronto,NA,Canada,43.652921,-79.384901,NA,private,International,Day,Anglican,All-Girls,23327.45,None,None
None,None,Toronto,NA,Canada,43.652921,-79.384901,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Torrance,California,United States,33.835849,-118.340629,0.22605364,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Towson,Maryland,United States,39.396438,-76.614734,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28960,Women's Soccer,None
None,None,Travelers Rest,South Carolina,United States,34.967617,-82.443455,0.45387755,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Traverse City,Michigan,United States,44.760644,-85.61653,0.6,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Trent Woods,North Carolina,United States,35.082104,-77.086338,NA,private,Domestic,Day,Antabaptist,All-Girls,23080,None,BN
None,None,Tucker,Georgia,United States,33.854372,-84.216813,Data not available,private,Domestic,Day,Catholic,Co-Ed,14170,None,None
None,None,Tucson,Arizona,United States,32.221742,-110.926476,0.57,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tucson,Arizona,United States,32.221742,-110.926476,0.57,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tucson,Arizona,United States,32.221742,-110.926476,0.1245,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Tulsa,Oklahoma,United States,36.155681,-95.992911,0.33963964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Tustin,California,United States,33.745851,-117.826166,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,37700,None,None
None,None,Tustin,California,United States,33.745851,-117.826166,Data not available,private,Domestic,Day,Catholic,Co-Ed,15850,None,None
None,None,Tustin,California,United States,33.745851,-117.826166,0.2277,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Union City,New Jersey,United States,40.779546,-74.023751,NA,private,Domestic,Day,Episcopal,Co-Ed,47965,None,None
None,None,Valdosta,Georgia,United States,30.832702,-83.278485,1,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Valencia,California,United States,34.146677,-117.272543,0.24806534,public,Domestic,Day,Unafilliated,Co-Ed,0,Fooball,None
None,None,Valencia,California,United States,34.146677,-117.272543,0.24806534,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Swimming,None
Sorority,Pi Beta Phi,Valley Stream,New York,United States,40.66427,-73.708464,0.17833173,public,Domestic,Day,Unafilliated,Co-Ed,0,None,AB
None,None,Vancouver,NA,Canada,45.630695,-122.674456,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vancouver,Washington,United States,45.630695,-122.674456,0.38855909,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Vancouver,NA,Canada,45.630695,-122.674456,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Vancouver,Washington,United States,49.260894,-123.113938,0.29345266,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Vancouver,Washington,United States,49.260894,-123.113938,0.29345266,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vass,North Carolina,United States,35.256268,-79.282249,0.32275132,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vernon Hills,Illinois,United States,42.219469,-87.979519,0.12824547,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vero Beach,Florida,United States,27.638716,-80.39754,Data not available,private,Domestic,Day,Episcopal,Co-Ed,26160,None,None
Fraternity,Sigma Alpha Epsilon,Vero Beach,Florida,United States,27.638716,-80.39754,0.4724851,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vestavia,Alabama,United States,33.417699,-86.750381,0.07285115,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Victor,New York,United States,42.982563,-77.408879,0.14668652,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Victorville,California,United States,34.536107,-117.291156,0.229,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Vienna,Virginia,United States,38.901301,-77.265158,NA,private,International,Boarding,Inter-/Non-denominational,Co-Ed,NA,None,None
None,None,Vienna,NA,Austria,48.208354,16.372504,NA,private,International,Day,Unafilliated,Co-Ed,24420.72,None,None
None,None,Vienna,Virginia,United States,38.901301,-77.265158,0.09450337,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Gamma,Vienna,Virginia,United States,38.901301,-77.265158,0.09450337,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
Fraternity,Pi Kappa Phi,Vientiane,NA,Laos,17.964099,102.613371,NA,private,International,Boarding,Unafilliated,Co-Ed,29963,None,AB
None,None,Villa Park,Illinois,United States,41.889132,-87.977485,0.27660572,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Sigma Phi,Villanova,Pennsylvania,United States,40.037332,-75.349077,Data not available,private,Domestic,Day,Episcopal,Co-Ed,33100,None,None
None,None,Villanova,Pennsylvania,United States,40.037332,-75.349077,0.10068259,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Virginia Beach,Virginia,United States,36.718371,-76.24668,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,23700,Field Hockey,None
None,None,Virginia Beach,Virginia,United States,36.718371,-76.24668,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19650,None,Robertson
None,None,Virginia Beach,Virginia,United States,36.718371,-76.24668,0.25045537,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Waban,Massachusetts,United States,42.326914,-71.230224,0.13865779,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wake Forest,North Carolina,United States,35.98031,-78.510343,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,49880,None,None
Sorority,Delta Delta Delta,Wakefield,Massachusetts,United States,42.506484,-71.072831,NA,private,Domestic,Day,Catholic,Co-Ed,20100,None,None
None,None,Waldorf,Maryland,United States,38.626388,-76.910658,0.16214807,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Walkersville,Maryland,United States,39.486213,-77.351928,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Walnut Cove,North Carolina,United States,36.295415,-80.141712,0.35492364,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Wantagh,New York,United States,40.683712,-73.510126,0.04995374,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,Warren,New Jersey,United States,40.860222,-74.972049,NA,private,Domestic,Day,Unafilliated,Co-Ed,38273,None,None
None,None,Warrenton,Virginia,United States,38.71355,-77.795367,0.08064516,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Warrington,Pennsylvania,United States,40.248315,-75.159002,NA,private,Domestic,Day,Catholic,All-Girls,18200,None,None
Fraternity,Delta Sigma Phi,Warrington,Pennsylvania,United States,40.248315,-75.159002,0.08086253,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
None,None,Warwick,New York,United States,41.256483,-74.359875,0.12299854,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
Fraternity,Sigma Phi Epsilon,"Washington, D.C.","Washington, D.C.",United States,38.894955,-77.036646,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,38710,None,None
None,None,"Washington, D.C.","Washington, D.C.",United States,38.894955,-77.036646,0.9933,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Watchung,New Jersey,United States,40.63788,-74.450986,0.02267573,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Fencing,None
None,None,Water Mill,New York,United States,40.905934,-72.362029,0.07663551,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Waterford,Virginia,United States,39.188317,-77.61154,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wauseon,Ohio,United States,41.546069,-84.136205,0.1994,public,Domestic,Day,Unafilliated,Co-Ed,0,Wrestling,None
None,None,Waxhaw,North Carolina,United States,34.924594,-80.743402,Data not available,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wayland,Massachusetts,United States,42.363206,-71.360672,0.07990599,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wayne,Pennsylvania,United States,40.044015,-75.387862,0.06094588,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Sigma Phi Epsilon,Waynesboro,Virginia,United States,38.065229,-78.905888,0.48972602,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wellington,NA,New Zealand,26.658678,-80.241436,NA,public,International,Day,Unafilliated,Co-Ed,0,None,Robertson
Fraternity,Pi Kappa Alpha,Wellington,Florida,United States,-41.288764,174.777224,0.3324937,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Alpha Delta Phi,West Chester,Pennsylvania,United States,39.959721,-75.605964,NA,private,Domestic,Day,Catholic,All-Boys,31200,Men's Track,None
None,None,West Chester,Pennsylvania,United States,39.959721,-75.605964,0.10742496,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,West Hartford,Connecticut,United States,41.762045,-72.74204,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56600,None,None
Sorority,Chi Omega,West Hartland,Connecticut,United States,42.007595,-72.970659,NA,Home School,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,West Linn,Oregon,United States,45.365676,-122.612314,Data not available,private,Domestic,Day,Catholic,Co-Ed,13875,None,Robertson
Sorority,Alpha Delta Pi,West New York,New Jersey,United States,40.788009,-74.014276,NA,private,Domestic,Boarding,Presbyterian,Co-Ed,57900,None,None
Fraternity,Pi Kappa Phi,West Orange,New Jersey,United States,40.798711,-74.239035,0.01570964,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,West Palm Beach,Florida,United States,26.715343,-80.053375,0.62390891,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Phi,West Palm Beach,Florida,United States,26.715343,-80.053375,0.1988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,Robertson
Fraternity,Sigma Phi Epsilon,West Palm Beach,Florida,United States,26.715343,-80.053375,0.1988,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Western Springs,Illinois,United States,41.809753,-87.900615,0.15652613,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Westfield,New Jersey,United States,40.658991,-74.347372,0.03128371,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Track,None
Fraternity,Delta Sigma Phi,Westfield,New Jersey,United States,40.658991,-74.347372,0.03128371,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Soccer,None
None,None,Westford,Massachusetts,United States,42.579258,-71.437841,0.0489596,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Westmount,NA,Canada,45.485733,-73.596395,NA,public,International,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Weston,Massachusetts,United States,42.366763,-71.303113,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,46250,None,None
Sorority,Delta Delta Delta,Weston,Connecticut,United States,42.366763,-71.303113,NA,private,Domestic,Day,Unafilliated,Co-Ed,42770,None,None
None,None,Weston,Massachusetts,United States,42.366763,-71.303113,Data not available,private,Domestic,Day,Catholic,All-Boys,44850,Baseball,None
None,None,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Weston,Massachusetts,United States,42.366763,-71.303113,0.06082036,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Delta Delta Delta,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Tau Delta,Weston,Florida,United States,26.103632,-80.403102,0.18222321,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Weston,Massachusetts,United States,41.201156,-73.380529,0.06082036,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,Rowing,None
None,None,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Swimming,None
Fraternity,Delta Sigma Phi,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Alpha Theta,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Westport,Connecticut,United States,41.141486,-73.357895,0.04314994,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wexford,Pennsylvania,United States,40.626456,-80.055891,0.05475928,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wexford,Pennsylvania,United States,40.626456,-80.055891,0.05475928,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Wexford,Pennsylvania,United States,40.626456,-80.055891,0.05475928,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wheat Ridge,Colorado,United States,39.766098,-105.077206,0.4733124,public,Domestic,Day,Unafilliated,Co-Ed,0,Women's Lacrosse,None
None,None,Wheatley Heights,New York,United States,40.76371,-73.369843,0.16494845,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Whippany,New Jersey,United States,40.824544,-74.417097,0.03424657,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,White Plains,New York,United States,41.033986,-73.76291,0.09939148,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Gamma Phi Beta,Whittier,California,United States,33.974893,-118.033697,0.44081632,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Kappa Alpha Order,Wichita,Kansas,United States,37.692236,-97.337545,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,"18,225",None,None
None,None,Willington,Connecticut,United States,41.875097,-72.263968,0.15625,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Willoughby Hills,Ohio,United States,41.598382,-81.418447,Data not available,private,Domestic,Boarding,Unafilliated,Co-Ed,56000,None,None
Fraternity,Sigma Phi Epsilon,Wilmington,Delaware,United States,34.225728,-77.944711,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,28400,None,None
Sorority,Alpha Phi,Wilmington,Delaware,United States,34.225728,-77.944711,NA,private,Domestic,Day,Quaker,Co-Ed,27000,None,None
Fraternity,Delta Sigma Phi,Wilmington,Delaware,United States,34.225728,-77.944711,Data not available,private,Domestic,Day,Quaker,Co-Ed,27000,None,None
None,None,Wilmington,North Carolina,United States,34.225728,-77.944711,0.4025974,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Wilmington,North Carolina,United States,39.745947,-75.546589,0.28387458,public,Domestic,Day,Unafilliated,Co-Ed,0,None,BN
None,None,Wilmington,North Carolina,United States,39.745947,-75.546589,0.19985825,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Zeta Tau Alpha,Wilmington,North Carolina,United States,34.225728,-77.944711,0.43157403,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Chi Omega,Wilmington,North Carolina,United States,39.745947,-75.546589,0.39,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Wilton,Connecticut,United States,41.195374,-73.437899,0.02071005,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Windermere,Florida,United States,28.49447,-81.534555,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,19925,None,None
Fraternity,Chi Psi,Windermere,Florida,United States,28.49447,-81.534555,0.39598662,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Windsor,California,United States,40.477482,-104.901362,NA,private,Domestic,Day,Unafilliated,Co-Ed,41400,None,None
None,None,Windsor,Colorado,United States,38.519758,-122.804427,0.33027522,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Phi,Winnetka,Illinois,United States,42.108083,-87.735895,0.03953337,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Winston Salem,North Carolina,United States,36.099817,-80.244144,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21518,None,None
None,None,Winston Salem,North Carolina,United States,36.099817,-80.244144,0.38968668,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Winston Salem,North Carolina,United States,36.099817,-80.244144,0.45897155,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Delta Kappa Epsilon,Winston Salem,North Carolina,United States,36.099817,-80.244144,0.38968668,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Winter Park,Florida,United States,28.600063,-81.342744,Data not available,private,Domestic,Day,Episcopal,Co-Ed,21190,None,None
None,None,Winter Springs,Florida,United States,28.693322,-81.288509,0.50209731,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Woodbury,Pennsylvania,United States,41.364538,-74.105977,0.38656987,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Alpha Delta Pi,Woodbury,New York,United States,41.364538,-74.105977,0.04075961,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Fraternity,Pi Kappa Alpha,Woodbury,New York,United States,40.226467,-78.36668,0.04075961,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Woodland,California,United States,38.678611,-121.773328,0.24076433,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
Sorority,Kappa Kappa Gamma,Woodside,California,United States,37.429939,-122.253856,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,42830,None,None
Sorority,Pi Beta Phi,Woodside,California,United States,37.429939,-122.253856,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,21350,None,None
None,None,Woodway,Texas,United States,31.506,-97.205005,Data not available,public,Domestic,Day,Unafilliated,Co-Ed,8300,None,None
None,None,Woodway,Texas,United States,31.506,-97.205005,0.25065731,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Worcester,Massachusetts,United States,42.262593,-71.802293,Data not available,private,Domestic,Day,Catholic,All-Boys,13135,None,None
None,None,Wuxi,NA,China,31.575635,120.295453,NA,private,International,Day,Unafilliated,All-Boys,3165.54,None,None
Fraternity,Delta Sigma Phi,Wynnewood,Pennsylvania,United States,40.002851,-75.270747,Data not available,private,Domestic,Day,Unafilliated,Co-Ed,36100,None,None
None,None,Yangzhou,NA,China,32.392697,119.436576,NA,Data not available,International,Day,Unafilliated,Co-Ed,NA,None,None
None,None,Yangzhou,NA,China,32.392697,119.436576,NA,public,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Yazoo City,Mississippi,United States,32.855133,-90.405647,Data not available,private,Domestic,Day,Inter-/Non-denominational,Co-Ed,5508,None,None
None,None,Yokohama,NA,Japan,35.455592,139.572196,NA,private,International,Day,Unafilliated,Co-Ed,23717.5,None,None
None,None,Yongin,NA,South Korea,37.240856,127.177602,NA,private,International,Boarding,Unafilliated,Co-Ed,NA,None,None
None,None,Yorba Linda,California,United States,33.890107,-117.825594,0.09159584,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Yuba City,California,United States,39.140448,-121.616911,0.26551226,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None
None,None,Yuma,Arizona,United States,32.665167,-114.475905,Data not available,private,Domestic,Day,Catholic,Co-Ed,8950,None,None
None,None,Zhanjiang,NA,China,21.202192,110.404598,NA,public,International,Data not available,Unafilliated,Co-Ed,NA,None,None
None,None,Zhanjiang,NA,China,21.202192,110.404598,Data not available,private,Domestic,Boarding,Catholic,Co-Ed,58300,None,None
None,None,Zionsville,Indiana,United States,39.950873,-86.261937,0.04590163,public,Domestic,Day,Unafilliated,Co-Ed,0,Men's Golf,None
Sorority,Gamma Phi Beta,Zolfo Springs,Florida,United States,27.493372,-81.795915,0.73328435,public,Domestic,Day,Unafilliated,Co-Ed,0,None,None`


export default dataCSV;
