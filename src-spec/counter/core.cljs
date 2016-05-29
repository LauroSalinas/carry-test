; namespace is extracted into a separate src folder in order to be reused in elm-ish architecture examples
(ns counter.core
  (:require [cljs.core.match :refer-macros [match]]
            [counter.utils :as utils]
            [counter.view :as view])
  (:require-macros [reagent.ratom :refer [reaction]]))


(def snake {:direction [1 0]
            :body [[3 2] [2 2] [1 2] [0 2]]})
(def board [35 25])

(def -initial-model {:val 0
                     :thetime 0
                     :box-value "hello"
                     :clock-time (js/Date.)

                     ;snake game testing
                     :board board
                     :snake snake
                     :points 0
                     :game true
                     :point (utils/rand-free-position snake board)})

(defn -control
  [model signal _dispatch-signal dispatch-action]
  (match signal
         ; start and stop are required because counter is used as a subapp in another example
         :on-start
         (do
           (when (= (:thetime @model) 0)
             (.setInterval js/window #(dispatch-action :inc-time) 1000))

           (.setInterval js/window #(dispatch-action :set-clock) 1000)
           )

         :on-stop nil

         :on-increment
         (dispatch-action :increment)

         :on-decrement
         (dispatch-action :decrement)

         :on-increment-if-odd
         (when (odd? (:val @model))
           (dispatch-action :increment))

         :on-increment-async
         (.setTimeout js/window #(dispatch-action :increment) 1000)
  )
)


(defn -reconcile
  [model action]
  (match action
         :change-value (update model :box-value (fn [] (str "there")))
         :increment (update model :val inc)
         :decrement (update model :val dec)
         :inc-time (update model :thetime inc)

         :set-clock (update model :clock-time (fn [] (js/Date.)))
         ))

(defn view-model
  [model]
  {:counter (reaction (str "#" (:val @model)))
   :timer (reaction (str "Time elapsed: " (:thetime @model)))
   :bvalue (reaction (str "1" (:box-value @model)))
   :clock (reaction (:clock-time @model))

   :vboard (reaction (:board @model))
   :vsnake (reaction (:snake @model))
   :vpoints (reaction (:points @model))
   :vgame (reaction (:game @model))
   :vpoint (reaction (:point @model))
   })

(defn show-time
  [date]
  [:h1 (.getHours date) ":"

   (if (< 9 (.getMinutes date))
     (str (.getMinutes date))
     (str "0" (.getMinutes date))) ":"

   (if (< 9 (.getSeconds date))
     (str (.getSeconds date))
     (str "0" (.getSeconds date)))
   ]
  )

(defn view
  [{:keys [counter timer bvalue clock
           vboard vsnake vpoints vgame vpoint] :as _view-model} dispatch]
  [:p
   @counter " "
   [:button {:on-click #(dispatch :on-increment)} "+"] " "
   [:button {:on-click #(dispatch :on-decrement)} "-"] " "
   [:button {:on-click #(dispatch :on-increment-if-odd)} "Increment if odd"] " "
   [:button {:on-click #(dispatch :on-increment-async)} "Increment async"] " "
   [:p
    @timer " "
    ]
   [:p
    [:div
     "Input Value: "
     [:input {:type "text"
              :value @bvalue
              :on-change #(dispatch :change-value)}]
     ]


    ]
    [:p
     "The time is: "
     [show-time @clock]
     ]

   [:p
    [:div
     "Test input: "
     [:input {:type "text"
              :value @bvalue
              :on-change #(dispatch :change-value)}]]
    ]

   ;Snake game begin
   [:p
    [:h3 "Snake Game"]
     [:strong {:style {:color "red"}} "Board: "] (str @vboard) [:strong {:style {:color "red"}} " Snake: "] (str @vsnake) [:strong {:style {:color "red"}} " Points: "]
    (str @vpoints) [:strong {:style {:color "red"}} " Game: "] (str @vgame) [:strong {:style {:color "red"}} " Point: "] (str @vpoint)]
   [:div
    [view/score @vpoints]
    [view/render-board @vboard @vsnake @vpoint]]
    [view/game-over @vgame]

   ]

 )

(def spec {:initial-model -initial-model
           :control       -control
           :reconcile     -reconcile})