<script>
    import * as d3 from 'd3'
    export default {
        mounted() {

            const margin = {top: 30, right: 30, bottom: 50, left: 60};
            const width = 700 - margin.left - margin.right;
            const height = 500 - margin.top - margin.bottom;

            var svg = d3.select("svg#interactiveBar")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            let data = [
                {value: 98, label: 'A'},
                {value: 27, label: 'B'}
            ]

            let yScale = d3.scaleLinear()
                .domain([0, 100])
                .range([height, 0])

            svg.append("g")
                .call(d3.axisLeft(yScale))

            svg.append("text")
                .attr("x", (width / 2))
                .attr("y", 0 - (margin.top / 5))
                .attr("text-anchor", "middle")
                .attr("font-size", "35px")
                .text("Interactive Bar Chart")

            let xScale = d3.scaleBand()
                .domain(data.map((d) => d.label))
                .range([0, width])
                .padding(.2)

            svg.append("g")
                .attr("transform", "translate( 0," + height + ")")
                .call(d3.axisBottom(xScale));

            svg.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                    .attr("x", (d) => xScale(d.label))
                    .attr("y", (d) => yScale(d.value))
                    .attr("width", xScale.bandwidth())
                    .attr("height", (d) => height - yScale(d.value))
                    .attr("fill", "red")


            d3.select('input#barRange').on("input", function() {

                data[0].value = this.value
                data[1].value = 100 - this.value

                svg.selectAll("rect")
                    .data(data)
                    .join("rect")
                    .attr("height", (d) => height - yScale(d.value))
                    .attr("y", (d) => yScale(d.value))
                    
            })

            d3.selectAll('svg#interactiveBar rect').on("mouseover", function(d) {
                let rect = d3.select(this)
                rect.transition().duration(500).attr('fill', 'darkred')
            })
            d3.selectAll('svg#interactiveBar rect').on("mouseout", function(d) {
                let rect = d3.select(this)
                rect.transition().duration(500).attr('fill', 'red')
            }) 

        },
        data() {
            return {
                greeting: 'Hello World!'
            }
        },
        methods: {
            linearFunction: function(x) {
                return [x, Math.pow(x - .5, 2) * 40]
            },
            lineData: function() {
                let temp = []
                for (let i = 0; i <= 100; i++) {
                    temp.push( this.linearFunction(i) )
                }
                return temp
            }
        }
    }

</script>

<template>
    <svg id="interactiveBar"></svg>
    <div class="slidecontainer">
        <input type="range" min="0" max="100" value="0" class="slider" id="barRange">
    </div>
</template>

<style>
svg#interactiveBar {
    display: block;
    margin: auto;
}
.slidecontainer {
    text-align: center;
}
</style>