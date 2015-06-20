(ns link-app.subs
    (:require-macros [reagent.ratom :refer [reaction]])
    (:require [re-frame.core :as re-frame]))

(re-frame/register-sub
 :links
 (fn [db]
   (reaction (:links @db))))

(re-frame/register-sub
 :link-id
 (fn [db]
   (reaction (:link-id @db))))

(re-frame/register-sub
  :link
  (fn [db]
    (let [link-id (re-frame/subscribe [:link-id])
          links (re-frame/subscribe [:links])
          link (->> @links
                     (filter #(=  (:id %) @link-id))
                     first)]
      (reaction link))))

(re-frame/register-sub
 :current-page
 (fn [db _]
   (reaction (:current-page @db))))
