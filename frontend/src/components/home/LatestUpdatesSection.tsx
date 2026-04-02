import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight } from 'lucide-react';
import { LATEST_NEWS, RECENT_CASES } from '@/constants';

const LatestUpdatesSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Updates</h2>
        
        <Tabs defaultValue="news" className="w-full">
          <div className="flex justify-center mb-6">
            <TabsList className="grid grid-cols-2 w-[400px]">
              <TabsTrigger value="news" className="text-base">Latest News</TabsTrigger>
              <TabsTrigger value="cases" className="text-base">Recent Cases</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="news" className="space-y-6">
            {LATEST_NEWS.map((news, index) => (
              <Card key={index} className="hover-card-effect">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{news.title}</CardTitle>
                    <span className="text-sm text-muted-foreground">{news.date}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{news.snippet}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-india-blue p-0">
                    <Link to={news.url} className="flex items-center">
                      Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <div className="flex justify-center pt-4">
              <Button variant="outline" asChild>
                <Link to="/news" className="flex items-center">
                  View All News <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="cases" className="space-y-6">
            {RECENT_CASES.map((case_, index) => (
              <Card key={index} className="hover-card-effect">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{case_.title}</CardTitle>
                    <div className="text-right">
                      <div className="text-sm font-medium">{case_.court}</div>
                      <div className="text-sm text-muted-foreground">{case_.date}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{case_.snippet}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-india-blue p-0">
                    <Link to={case_.url} className="flex items-center">
                      Read Case Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
            <div className="flex justify-center pt-4">
              <Button variant="outline" asChild>
                <Link to="/cases" className="flex items-center">
                  View All Cases <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default LatestUpdatesSection;
