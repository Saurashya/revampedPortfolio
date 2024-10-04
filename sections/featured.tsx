import FeaturedCard from '@/components/cards/featured/featured-card';
import ExpandableFeatured from '@/components/expandable/expandable-featured';
import Heading from '@/components/Heading/heading';
import { featuredData } from "@/data";

const MainFeatured=featuredData[0];

function FeaturedSection() {
    return (
        <div className="pt-24 px-3 lg:px-8">
            <Heading number="01" title_1={"Featured"} title_2={"Work"}/>

            <FeaturedCard active title={MainFeatured.title} tag={MainFeatured.tag} video={MainFeatured.video} logo={MainFeatured.logo}/>

            <div className="mt-24">
                <ExpandableFeatured/>
            </div>
        </div>
    );
}

export default FeaturedSection;