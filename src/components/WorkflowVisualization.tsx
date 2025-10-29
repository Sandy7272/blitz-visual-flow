import { motion } from "framer-motion";
import { Video, Cloud, Image, Box, Type, Download } from "lucide-react";

const WorkflowVisualization = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
            AI Pipeline <span className="gradient-text">in Action</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Watch how our advanced AI transforms your video into professional assets
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
            {/* Step 1: Video Input */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all group">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                >
                  <Video className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-bold text-sm mb-1">Video Input</h3>
                <p className="text-xs text-muted-foreground">Upload</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:block md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-primary/50 to-primary animate-pulse" />
              </motion.div>
            </div>

            {/* Step 2: AI Processing */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-1"
            >
              <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all group glow-effect">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                >
                  <Cloud className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="font-bold text-sm mb-1">AI Cloud</h3>
                <p className="text-xs text-muted-foreground">Processing</p>
              </div>
            </motion.div>

            {/* Arrow */}
            <div className="hidden md:block md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-center justify-center"
              >
                <div className="h-0.5 w-full bg-gradient-to-r from-primary to-primary/50 animate-pulse" />
              </motion.div>
            </div>

            {/* Step 3: Outputs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="md:col-span-3"
            >
              <div className="grid grid-cols-2 gap-3">
                {/* Studio Photos */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Image className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">Studio Photos</p>
                </motion.div>

                {/* 3D Models */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Box className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">3D Models</p>
                </motion.div>

                {/* Lifestyle */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Image className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">Lifestyle Scenes</p>
                </motion.div>

                {/* Descriptions */}
                <motion.div
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all"
                >
                  <div className="w-10 h-10 mx-auto mb-2 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Type className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-semibold">SEO Copy</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16"
          >
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">2 min</div>
              <p className="text-muted-foreground">Average processing time</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">95%</div>
              <p className="text-muted-foreground">Time saved vs traditional</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold gradient-text mb-2">4K</div>
              <p className="text-muted-foreground">Output resolution</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowVisualization;
