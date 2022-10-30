
<article>
    <div class="box-red">box red</div>
    <slot />
    <div class="box-yellow">box yellow</div>
</article>

<style lang="postcss">
:global {
    @import '../app.css';
}

.box-yellow {
    background-color: yellow;
}
</style>
