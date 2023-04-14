<template>
  <PtView class="ViewModals">
    <PtStatusbar />

    <PtTitlebar>
      <template #left>
        <PtTitlebarBackButton />
      </template>
      <template #center>Modals</template>
    </PtTitlebar>

    <PtViewContent>
      <p>Page “Modals” goes here.</p>
      <p>
        <a href="javascript:void(0);" @click="modalBottomVisible = true">Show modal from bottom</a><br>(with <code>PtSplitHeadbar</code>)
      </p>
      <p>
        <a href="javascript:void(0);" @click="modalTopVisible = true">Show modal from top</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="modalRightVisible = true">Show modal from right</a><br>(with <code>PtSplitFootbar</code>)
      </p>
      <p>
        <a href="javascript:void(0);" @click="modalLeftVisible = true">Show modal from left</a>
      </p>
      <p>
        <a href="javascript:void(0);" @click="modalCenterVisible = true">Show modal from center</a><br>(with <code>PtSplitHeadbar</code>)
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab nesciunt numquam vero iure sapiente. Molestiae nihil ipsum libero? Labore dicta nulla tenetur fugit adipisci culpa hic ipsam officia excepturi ipsa.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio dolorem quis alias tempore explicabo? Beatae provident quaerat adipisci fuga dolorum cumque aliquam necessitatibus, minus animi, deserunt, architecto ipsa totam eos.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit temporibus voluptates atque veniam obcaecati sint saepe consequuntur deserunt asperiores nulla, accusamus tempore autem fugiat nisi molestiae exercitationem accusantium, provident illum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum saepe nesciunt corporis non maiores similique, quasi eum accusamus asperiores hic quia dicta ad pariatur enim, quas unde alias, reprehenderit quo.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, facere recusandae quae quaerat doloribus eius porro culpa est molestias dolore. Vel amet exercitationem architecto ullam soluta nam consequatur. Qui, quae.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto, aut beatae dicta dignissimos distinctio dolores ducimus eaque eligendi minus, officia provident rem reprehenderit rerum sapiente sint, suscipit voluptates? Placeat!
      </p>
    </PtViewContent>

    <PtModal position="bottom" :visible="modalBottomVisible" @hide="modalBottomVisible = false">
      <PtSplitHeadbar>
        <template #bar>
          <p>The sheet modal goes here. <a href="javascript:void(0);" @click="modalBottomVisible = false">Close</a></p>
        </template>
        <PtViewContent style="max-height: 150px;">
          <p>Lorem ipsum natus iusto, deleniti blanditiis, itaque quas perspiciatis nam vel nulla qui dolore nostrum voluptas aperiam architecto pariatur animi quis beatae enim at.</p>
          <p>Lorem ipsum quibusdam repudiandae repellat possimus repellendus, praesentium tempore molestias a, magni quos at ea asperiores. Consequuntur, eius! Magnam itaque debitis quia qui non!</p>
          <p>Lorem ipsum accusantium at molestiae eaque nam fuga voluptatibus? Architecto facere voluptas excepturi maxime fugiat, soluta necessitatibus at repellat quasi id praesentium expedita deserunt!</p>
          <p>Lorem ipsum minima vitae, ab officia quam quasi sapiente ipsum at voluptatem voluptate praesentium facilis? Inventore earum blanditiis eos aperiam est iusto ipsum debitis.</p>
        </PtViewContent>
      </PtSplitHeadbar>
    </PtModal>

    <PtModal position="top" :visible="modalTopVisible" @hide="modalTopVisible = false">
      <PtSplitHeadbar>
        <template #bar>
          <p>The sheet modal goes here. <a href="javascript:void(0);" @click="modalTopVisible = false">Close</a></p>
        </template>
        <PtViewContent style="max-height: 150px;">
          <p>Lorem ipsum natus iusto, deleniti blanditiis, itaque quas perspiciatis nam vel nulla qui dolore nostrum voluptas aperiam architecto pariatur animi quis beatae enim at.</p>
          <p>Lorem ipsum quibusdam repudiandae repellat possimus repellendus, praesentium tempore molestias a, magni quos at ea asperiores. Consequuntur, eius! Magnam itaque debitis quia qui non!</p>
          <p>Lorem ipsum accusantium at molestiae eaque nam fuga voluptatibus? Architecto facere voluptas excepturi maxime fugiat, soluta necessitatibus at repellat quasi id praesentium expedita deserunt!</p>
          <p>Lorem ipsum minima vitae, ab officia quam quasi sapiente ipsum at voluptatem voluptate praesentium facilis? Inventore earum blanditiis eos aperiam est iusto ipsum debitis.</p>
        </PtViewContent>
      </PtSplitHeadbar>
    </PtModal>

    <PtModal position="right" :visible="modalRightVisible" @hide="modalRightVisible = false">
      <PtSplitFootbar style="width: 200px;">
        <template #bar>
          <p>The panel goes here. <a href="javascript:void(0);" @click="modalRightVisible = false">Close</a></p>
        </template>
        <PtViewContent>
          <p>Lorem ipsum minus quo eveniet ullam esse voluptates, minima, alias error sunt nulla sequi aliquam. Aliquam dolore, ipsum natus explicabo praesentium temporibus quos earum.</p>
          <p>Lorem ipsum non mollitia quod labore blanditiis aliquam iure unde, commodi quasi omnis illo veritatis quas nam accusantium nesciunt eos voluptas culpa hic suscipit!</p>
          <p>Lorem ipsum placeat, eligendi veritatis. Repellat ratione, neque natus, minima blanditiis facilis eius mollitia, nemo nisi eum sint facere suscipit dolores. Cupiditate, quibusdam impedit!</p>
          <p>Lorem ipsum distinctio recusandae officiis incidunt at unde minus corrupti! Autem optio ipsum quaerat veniam voluptatum laboriosam saepe dicta, quia, minima quis molestias error?</p>
          <p>Lorem ipsum qui aut vero, debitis quam rerum necessitatibus iste nihil voluptatibus explicabo consequatur laudantium. Possimus velit quod hic aliquid earum ipsa nam itaque?</p>
          <p>Lorem ipsum illo est porro tenetur similique error animi voluptatum consequatur fuga suscipit, modi ducimus eos natus reprehenderit alias, quia necessitatibus perspiciatis quod eum?</p>
          <p>Lorem ipsum id provident placeat magni autem illo, rem laudantium odit fuga similique, eius nihil natus voluptatem commodi excepturi a quo atque? Dignissimos, placeat!</p>
        </PtViewContent>
      </PtSplitFootbar>
    </PtModal>

    <PtModal position="left" :visible="modalLeftVisible" @hide="modalLeftVisible = false">
      <PtSplitHeadbar style="width: 200px;">
        <template #bar>
          <p>The panel goes here. <a href="javascript:void(0);" @click="modalLeftVisible = false">Close</a></p>
        </template>
        <PtViewContent style="width: 200px;">
          <p>Lorem ipsum minus quo eveniet ullam esse voluptates, minima, alias error sunt nulla sequi aliquam. Aliquam dolore, ipsum natus explicabo praesentium temporibus quos earum.</p>
          <p>Lorem ipsum non mollitia quod labore blanditiis aliquam iure unde, commodi quasi omnis illo veritatis quas nam accusantium nesciunt eos voluptas culpa hic suscipit!</p>
          <p>Lorem ipsum placeat, eligendi veritatis. Repellat ratione, neque natus, minima blanditiis facilis eius mollitia, nemo nisi eum sint facere suscipit dolores. Cupiditate, quibusdam impedit!</p>
          <p>Lorem ipsum distinctio recusandae officiis incidunt at unde minus corrupti! Autem optio ipsum quaerat veniam voluptatum laboriosam saepe dicta, quia, minima quis molestias error?</p>
          <p>Lorem ipsum qui aut vero, debitis quam rerum necessitatibus iste nihil voluptatibus explicabo consequatur laudantium. Possimus velit quod hic aliquid earum ipsa nam itaque?</p>
          <p>Lorem ipsum illo est porro tenetur similique error animi voluptatum consequatur fuga suscipit, modi ducimus eos natus reprehenderit alias, quia necessitatibus perspiciatis quod eum?</p>
          <p>Lorem ipsum id provident placeat magni autem illo, rem laudantium odit fuga similique, eius nihil natus voluptatem commodi excepturi a quo atque? Dignissimos, placeat!</p>
        </PtViewContent>
      </PtSplitHeadbar>
    </PtModal>

    <PtModal position="center" :visible="modalCenterVisible" @hide="modalCenterVisible = false">
      <PtSplitHeadbar style="width: 300px; max-height: 200px;">
        <template #bar>
          <p>The dialog goes here. <a href="javascript:void(0);" @click="modalCenterVisible = false">Close</a></p>
        </template>
        <PtViewContent>
          <p>Lorem ipsum minus quo eveniet ullam esse voluptates, minima, alias error sunt nulla sequi aliquam. Aliquam dolore, ipsum natus explicabo praesentium temporibus quos earum.</p>
          <p>Lorem ipsum non mollitia quod labore blanditiis aliquam iure unde, commodi quasi omnis illo veritatis quas nam accusantium nesciunt eos voluptas culpa hic suscipit!</p>
        </PtViewContent>
      </PtSplitHeadbar>
    </PtModal>
  </PtView>
</template>

<script>
export default {
  data () {
    return {
      modalBottomVisible: false,
      modalTopVisible: false,
      modalRightVisible: false,
      modalLeftVisible: false,
      modalCenterVisible: false
    }
  }
}
</script>
