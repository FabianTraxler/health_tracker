# Postgres Database

## Config

Database Name: health_data

Username: health
Password: helath

Port: 5432

## Relations

- Nutrition
    * Date: Date in Format (YYYY-mm-dd)
    * cow: Scale from 0(none) - 5(very much)
    * chicken: Scale from 0(none) - 5(very much)
    * fish: Scale from 0(none) - 5(very much)
    * pork: Scale from 0(none) - 5(very much)
    * meat: Scale from 0(none) - 5(very much)
    * wheat: Scale from 0(none) - 5(very much)
    * glutes: Scale from 0(none) - 5(very much)
    * dairy: Scale from 0(none) - 5(very much)
    * rice: Scale from 0(none) - 5(very much)
    * vegetables: Scale from 0(none) - 5(very much)
    * sugar: Scale from 0(none) - 5(very much)
    * coffee: Scale from 0(none) - 5(very much)
    * beer: Scale from 0(none) - 5(very much)
    * wine: Scale from 0(none) - 5(very much)
    * strong_alcohol: Scale from 0(none) - 5(very much)
    * alcohol: Scale from 0(none) - 5(very much)

- Health
    * feeling: Scale from 0(very bad) - 5 (very good)
    * bowl_movement: Scale from 0(very bad) - 5 (very good)
    * digestion: Scale from 0(very bad) - 5 (very good)
    * skin: Scale from 0(very bad) - 5 (very good)
    * sleep: Scale from 0(very bad) - 5 (very good)
    * meditation: Scale from 0(very bad) - 5 (very good)
    
- Time
    * sleep: Scale from 0(no sleep) - 5 (very good)
    * meditation: Scale from 0(no meditation) - 5 (very good)
    * screen_time: Scale from 0(no screen time) - 5 (very good)
    * high_intense_training: Scale from 0(no training) - 5 (very good)
    * endurance_training: Scale from 0(no training) - 5 (very good)
