(ns counter.view)

(defn render-board
  "Renders game board area with snake and point to catch"
  [board snake point]
  (let [[width height] board
        snake-positions (into #{} (:body snake))
        current-point point
        cells (for [y (range height)]
                (into [:tr]
                      (for [x (range width)
                            :let [current-pos [x y]]]
                        (cond
                          (snake-positions current-pos) [:td.snake-on-cell]
                          (= current-pos current-point) [:td.point]
                          :else [:td.cell]))))]
    (into [:table.stage {:style {:height 377
                                 :width 527}}]
          cells)))