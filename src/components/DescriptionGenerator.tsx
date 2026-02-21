
"use client";

import React, { useState } from 'react';
import { generateProjectDescription } from '@/ai/flows/generate-project-description';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Sparkles, Loader2 } from 'lucide-react';

export const DescriptionGenerator: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const [techStack, setTechStack] = useState('');
  const [overview, setOverview] = useState('');
  const [generatedDesc, setGeneratedDesc] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!projectName || !techStack) return;
    setLoading(true);
    try {
      const result = await generateProjectDescription({
        projectName,
        techStack: techStack.split(',').map(s => s.trim()),
        projectOverview: overview
      });
      setGeneratedDesc(result.description);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="glass-card mt-12 max-w-2xl mx-auto border-dashed border-electric-blue/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl font-headline uppercase tracking-wide">
          <Sparkles className="w-5 h-5 text-electric-blue" />
          System-Level AI Architect
        </CardTitle>
        <p className="text-xs text-muted-foreground font-mono uppercase tracking-widest">
          Internal Tool: Generate precise system descriptions.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input 
            placeholder="Project Name" 
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-bg-primary border-border-subtle"
          />
          <Input 
            placeholder="Tech Stack (comma separated)" 
            value={techStack}
            onChange={(e) => setTechStack(e.target.value)}
            className="bg-bg-primary border-border-subtle"
          />
        </div>
        <Textarea 
          placeholder="Brief overview (what does it do?)" 
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
          className="bg-bg-primary border-border-subtle min-h-[80px]"
        />
        <Button 
          onClick={handleGenerate} 
          disabled={loading || !projectName}
          className="w-full bg-electric-blue hover:bg-electric-blue/90"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
          Generate System Description
        </Button>
        {generatedDesc && (
          <div className="mt-6 p-4 bg-bg-primary/50 border border-electric-blue/20 rounded-lg">
            <p className="text-sm font-medium leading-relaxed italic text-electric-blue">
              "{generatedDesc}"
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
