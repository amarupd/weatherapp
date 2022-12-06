const cityName=document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name=document.getElementById('city_name');
const temp_real_val=document.getElementById('temp_real_val');
const temp_status=document.getElementById('temp_status');
const dataHide=document.querySelector('.middle_layer');

const getInfo=async(event)=>
{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal==="")
    {
        city_name.innerText='Please write the city name before searching';
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal},IN&appid=1378804aeafe0b631a88802bfd8d17d6`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            const arrData=[data];
            city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
            const temperature=(arrData[0].main.temp)-273.15;
            temp_real_val.innerText=Math.round( temperature * 100 + Number.EPSILON ) / 100;
            // temp_status.innerText=arrData[0].weather[0].main;

            const tempMood=arrData[0].weather[0].main;
             console.log(tempMood);

            //condition to check suuny or cloudy

                if(tempMood==='Clear')
                {
                  temp_status.innerHTML=`<i class="fas  fa-sun" style="color: #eccc68;"></i>`;
                }
                else if(tempMood==='Clouds')
                {
                  temp_status.innerHTML=`<i class="fas  fa-cloud" style="color: #837E7C";></i>`;
                }
                else if(tempMood==='Rain')
                {
                  temp_status.innerHTML="<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
                }
                else if(tempMood==='Mist')
                {
                  temp_status.innerHTML=`<i class="fas  fa-smog" style="color: #728C00";></i>`;
                }
                else if(tempMood==='Fog')
                {
                  temp_status.innerHTML=`<i class="fas  fa-smog" style="color: #355E3B";></i>`;
                }
                else if(tempMood==='Haze')
                {
                  temp_status.innerHTML=`<i class="fas  fa-smog" style="color: #1E90FF";></i>`;
                }
                else if(tempMood==='Smoke')
                {
                  temp_status.innerHTML=`<i class="fas  fa-smog" style="color: #2B547E";></i>`;
                }
                else
                {
                 temp_status.innerHTML="<i class='fas  fa-sun' style='color: #eccc68;'></i>";
                }
                dataHide.classList.remove('data_hide');
        }
        catch
        {
            dataHide.classList.add('data_hide');
            city_name.innerText='Please enter the city name properly';
        }
    }

}

submitBtn.addEventListener('click',getInfo);