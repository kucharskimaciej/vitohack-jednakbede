var ItemRender = {
    render: function () {
        var model = this.model || {};
        this.$el.html(this.template(model.attributes));
        return this;
    }
};
var CollectionRender = {
    render: function () {
        if(this.template) {
            this.$el.html(this.template());
        }
        this.renderChildren();
        return this;

    },
    renderChildren: function () {
        var collectionRoot = this.$(this.collectionRoot) || this.$el;
        collectionRoot.empty();
        this.collection.forEach((item) => {
            var view = new this.modelView({
                model: item
            });

            collectionRoot.append(view.render().el);
        });

        return this;
    }
};

module.exports = {
    item: ItemRender,
    collection: CollectionRender
};