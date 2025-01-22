deno run --allow-env --allow-net --allow-read --allow-scripts upload.ts

deno run --allow-env --allow-net --allow-read --allow-scripts main.ts





Example queries:
   listings in the southern downs region for young cowboys
   listings in the southern downs region for foodies
   listings in the southern downs region for elderly people

   listings in the southern downs region for a rainy day

   given that the most suitable activities for a rainy day is an indoor activity, art galleries, cafe's and similar listings, and the most suitable activities for good weather are outdoor adventures, find listings in the southern downs region given that its the weather forcast is for rain

   indoor rainy day activities in stanthorpe for art lovers

   listings closest to Brisbane
   listings spatially closest and most relevant to Gympie



TODO: 
-  Embed listing categories and classifications in the search index and the informative description
-  Add a search index for the listing categories and classifications so we can apply hard filters

-  Test other embedding models and metric_types to see if we can improve the search result reasoning capabilities.
   At the moment, it seems like some terms ("outdoor", "indoor") are being indexed as similar terms and hence a search for "indoor" returns results with "outdoor" in the description.

