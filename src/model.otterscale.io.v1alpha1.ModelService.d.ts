/** Generated from Remote JSON Schema for model.otterscale.io.v1alpha1.ModelService */

/**
 * ModelService is the Schema for the modelservices API.
 * A ModelService declares intent to serve an OCI-packaged model using vLLM,
 * optionally with Prefill/Decode disaggregation and Gateway API integration.
 * The model artifact is mounted via Kubernetes image volumes (requires K8s >= 1.35),
 * eliminating the need for init containers or PVC-based model loading.
 */
export interface ModelOtterscaleIoV1Alpha1ModelService {
  /**
   * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources
   */
  apiVersion?: string;
  /**
   * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
   */
  kind?: string;
  /**
   * ObjectMeta is metadata that all persisted resources must have, which includes all objects users must create.
   */
  metadata?: {
    /**
     * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations
     */
    annotations?: {
      [k: string]: string;
    };
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    creationTimestamp?: string;
    /**
     * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
     */
    deletionGracePeriodSeconds?: number;
    /**
     * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
     */
    deletionTimestamp?: string;
    /**
     * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed. Finalizers may be processed and removed in any order.  Order is NOT enforced because it introduces significant risk of stuck finalizers. finalizers is a shared field, any actor with permission can reorder it. If the finalizer list is processed in order, then this can lead to a situation in which the component responsible for the first finalizer in the list is waiting for a signal (field value, external system, or other) produced by a component responsible for a finalizer later in the list, resulting in a deadlock. Without enforced ordering finalizers are free to order amongst themselves and are not vulnerable to ordering changes in the list.
     */
    finalizers?: string[];
    /**
     * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.
     *
     * If this field is specified and the generated name exists, the server will return a 409.
     *
     * Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency
     */
    generateName?: string;
    /**
     * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
     */
    generation?: number;
    /**
     * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels
     */
    labels?: {
      [k: string]: string;
    };
    /**
     * ManagedFields maps workflow-id and version to the set of fields that are managed by that workflow. This is mostly for internal housekeeping, and users typically shouldn't need to set or understand this field. A workflow can be the user's name, a controller's name, or the name of a specific apply path like "ci-cd". The set of fields is always in the version that the workflow used when modifying the object.
     */
    managedFields?: {
      /**
       * APIVersion defines the version of this resource that this field set applies to. The format is "group/version" just like the top-level APIVersion field. It is necessary to track the version of a field set because it cannot be automatically converted.
       */
      apiVersion?: string;
      /**
       * FieldsType is the discriminator for the different fields format and version. There is currently only one possible value: "FieldsV1"
       */
      fieldsType?: string;
      /**
       * FieldsV1 stores a set of fields in a data structure like a Trie, in JSON format.
       *
       * Each key is either a '.' representing the field itself, and will always map to an empty set, or a string representing a sub-field or item. The string will follow one of these four formats: 'f:<name>', where <name> is the name of a field in a struct, or key in a map 'v:<value>', where <value> is the exact json formatted value of a list item 'i:<index>', where <index> is position of a item in a list 'k:<keys>', where <keys> is a map of  a list item's key fields to their unique values If a key maps to an empty Fields value, the field that key represents is part of the set.
       *
       * The exact format is defined in sigs.k8s.io/structured-merge-diff
       */
      fieldsV1?: {
        [k: string]: unknown;
      };
      /**
       * Manager is an identifier of the workflow managing these fields.
       */
      manager?: string;
      /**
       * Operation is the type of operation which lead to this ManagedFieldsEntry being created. The only valid values for this field are 'Apply' and 'Update'.
       */
      operation?: string;
      /**
       * Subresource is the name of the subresource used to update that object, or empty string if the object was updated through the main resource. The value of this field is used to distinguish between managers, even if they share the same name. For example, a status update will be distinct from a regular update using the same manager name. Note that the APIVersion field is not related to the Subresource field and it always corresponds to the version of the main resource.
       */
      subresource?: string;
      /**
       * Time is a wrapper around time.Time which supports correct marshaling to YAML and JSON.  Wrappers are provided for many of the factory methods that the time package offers.
       */
      time?: string;
      [k: string]: unknown;
    }[];
    /**
     * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
     */
    name?: string;
    /**
     * Namespace defines the space within which each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.
     *
     * Must be a DNS_LABEL. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces
     */
    namespace?: string;
    /**
     * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller.
     */
    ownerReferences?: {
      /**
       * API version of the referent.
       */
      apiVersion: string;
      /**
       * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
       */
      blockOwnerDeletion?: boolean;
      /**
       * If true, this reference points to the managing controller.
       */
      controller?: boolean;
      /**
       * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
       */
      kind: string;
      /**
       * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
       */
      name: string;
      /**
       * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
       */
      uid: string;
      [k: string]: unknown;
    }[];
    /**
     * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.
     *
     * Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * Deprecated: selfLink is a legacy read-only field that is no longer populated by the system.
     */
    selfLink?: string;
    /**
     * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.
     *
     * Populated by the system. Read-only. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
     */
    uid?: string;
    [k: string]: unknown;
  };
  /**
   * Spec defines the desired model serving configuration.
   */
  spec: {
    /**
     * Accelerator configures the GPU/accelerator type for serving pods.
     */
    accelerator: {
      /**
       * Type of accelerator hardware.
       * The operator uses this to determine the appropriate resource name
       * (e.g. nvidia.com/gpu, amd.com/gpu) and any accelerator-specific
       * environment variables.
       */
      type: 'nvidia' | 'amd' | 'intel-gaudi' | 'google' | 'cpu';
      [k: string]: unknown;
    };
    /**
     * Decode configures the decode (or unified) serving pods.
     * In non-disaggregated mode, these are the only serving pods.
     */
    decode: {
      /**
       * NodeSelector constrains pods to nodes with matching labels.
       */
      nodeSelector?: {
        [k: string]: string;
      };
      /**
       * Parallelism configures vLLM tensor/data parallelism for this role.
       */
      parallelism?: {
        /**
         * Data is the data-parallel-size: number of data-parallel replicas within a single pod.
         */
        data?: number;
        /**
         * DataLocal is the data-parallel-size-local for disaggregated serving.
         */
        dataLocal?: number;
        /**
         * Tensor is the tensor-parallel-size: number of GPUs used to shard a single model.
         */
        tensor?: number;
        [k: string]: unknown;
      };
      /**
       * Replicas is the desired number of pod replicas.
       */
      replicas?: number;
      /**
       * Resources for the vLLM container (CPU, memory).
       * GPU resources are automatically calculated from accelerator type
       * and parallelism (tensor * dataLocal) and should not be set manually.
       */
      resources?: {
        /**
         * Claims lists the names of resources, defined in spec.resourceClaims,
         * that are used by this container.
         *
         * This field depends on the
         * DynamicResourceAllocation feature gate.
         *
         * This field is immutable. It can only be set for containers.
         */
        claims?: {
          /**
           * Name must match the name of one entry in pod.spec.resourceClaims of
           * the Pod where this field is used. It makes that resource available
           * inside a container.
           */
          name: string;
          /**
           * Request is the name chosen for a request in the referenced claim.
           * If empty, everything from the claim is made available, otherwise
           * only the result of this request.
           */
          request?: string;
          [k: string]: unknown;
        }[];
        /**
         * Limits describes the maximum amount of compute resources allowed.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required.
         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      /**
       * Tolerations for the serving pods.
       */
      tolerations?: {
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects.
         * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        effect?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys.
         * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        key?: string;
        /**
         * Operator represents a key's relationship to the value.
         * Valid operators are Exists, Equal, Lt, and Gt. Defaults to Equal.
         * Exists is equivalent to wildcard for value, so that a pod can
         * tolerate all taints of a particular category.
         * Lt and Gt perform numeric comparisons (requires feature gate TaintTolerationComparisonOperators).
         */
        operator?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be
         * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
         * it is not set, which means tolerate the taint forever (do not evict). Zero and
         * negative values will be treated as 0 (evict immediately) by the system.
         */
        tolerationSeconds?: number;
        /**
         * Value is the taint value the toleration matches to.
         * If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        value?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * Engine configures the inference engine (vLLM).
     */
    engine: {
      /**
       * Args are additional vLLM command-line arguments.
       * The operator automatically sets --model, --port, --served-model-name,
       * --tensor-parallel-size, and --data-parallel-size based on the spec.
       * User-provided args are appended after the auto-generated ones.
       */
      args?: string[];
      /**
       * Env are additional environment variables for the engine container.
       */
      env?: {
        /**
         * Name of the environment variable.
         * May consist of any printable ASCII characters except '='.
         */
        name: string;
        /**
         * Variable references $(VAR_NAME) are expanded
         * using the previously defined environment variables in the container and
         * any service environment variables. If a variable cannot be resolved,
         * the reference in the input string will be unchanged. Double $$ are reduced
         * to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e.
         * "$$(VAR_NAME)" will produce the string literal "$(VAR_NAME)".
         * Escaped references will never be expanded, regardless of whether the variable
         * exists or not.
         * Defaults to "".
         */
        value?: string;
        /**
         * Source for the environment variable's value. Cannot be used if value is not empty.
         */
        valueFrom?: {
          /**
           * Selects a key of a ConfigMap.
           */
          configMapKeyRef?: {
            /**
             * The key to select.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: string;
            /**
             * Specify whether the ConfigMap or its key must be defined
             */
            optional?: boolean;
            [k: string]: unknown;
          };
          /**
           * Selects a field of the pod: supports metadata.name, metadata.namespace, `metadata.labels['<KEY>']`, `metadata.annotations['<KEY>']`,
           * spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
           */
          fieldRef?: {
            /**
             * Version of the schema the FieldPath is written in terms of, defaults to "v1".
             */
            apiVersion?: string;
            /**
             * Path of the field to select in the specified API version.
             */
            fieldPath: string;
            [k: string]: unknown;
          };
          /**
           * FileKeyRef selects a key of the env file.
           * Requires the EnvFiles feature gate to be enabled.
           */
          fileKeyRef?: {
            /**
             * The key within the env file. An invalid key will prevent the pod from starting.
             * The keys defined within a source may consist of any printable ASCII characters except '='.
             * During Alpha stage of the EnvFiles feature gate, the key size is limited to 128 characters.
             */
            key: string;
            /**
             * Specify whether the file or its key must be defined. If the file or key
             * does not exist, then the env var is not published.
             * If optional is set to true and the specified key does not exist,
             * the environment variable will not be set in the Pod's containers.
             *
             * If optional is set to false and the specified key does not exist,
             * an error will be returned during Pod creation.
             */
            optional?: boolean;
            /**
             * The path within the volume from which to select the file.
             * Must be relative and may not contain the '..' path or start with '..'.
             */
            path: string;
            /**
             * The name of the volume mount containing the env file.
             */
            volumeName: string;
            [k: string]: unknown;
          };
          /**
           * Selects a resource of the container: only resources limits and requests
           * (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
           */
          resourceFieldRef?: {
            /**
             * Container name: required for volumes, optional for env vars
             */
            containerName?: string;
            /**
             * Specifies the output format of the exposed resources, defaults to "1"
             */
            divisor?: number | string;
            /**
             * Required: resource to select
             */
            resource: string;
            [k: string]: unknown;
          };
          /**
           * Selects a key of a secret in the pod's namespace
           */
          secretKeyRef?: {
            /**
             * The key of the secret to select from.  Must be a valid secret key.
             */
            key: string;
            /**
             * Name of the referent.
             * This field is effectively required, but due to backwards compatibility is
             * allowed to be empty. Instances of this type with an empty value here are
             * almost certainly wrong.
             * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
             */
            name?: string;
            /**
             * Specify whether the Secret or its key must be defined
             */
            optional?: boolean;
            [k: string]: unknown;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      }[];
      /**
       * Image is the vLLM container image.
       */
      image?: string;
      /**
       * ImagePullPolicy for the engine container.
       */
      imagePullPolicy?: string;
      /**
       * Port is the port the inference engine listens on.
       * When a routing proxy is enabled, this is the external port exposed by the proxy,
       * and vLLM listens on routingProxy.targetPort instead.
       */
      port?: number;
      [k: string]: unknown;
    };
    /**
     * HTTPRoute optionally creates a Gateway API HTTPRoute pointing to the InferencePool.
     * Requires InferencePool to be set.
     */
    httpRoute?: {
      /**
       * GatewayRef references the Gateway to attach the HTTPRoute to.
       */
      gatewayRef: {
        /**
         * Name of the Gateway.
         */
        name: string;
        /**
         * Namespace of the Gateway. If empty, defaults to the ModelService namespace.
         */
        namespace?: string;
        [k: string]: unknown;
      };
      /**
       * Hostnames for the HTTPRoute. If empty, the route matches all hostnames.
       */
      hostnames?: string[];
      [k: string]: unknown;
    };
    /**
     * InferencePool configures the Gateway API Inference Extension InferencePool.
     * When set, the operator creates and manages an InferencePool resource
     * with selector labels matching the serving pods.
     */
    inferencePool?: {
      /**
       * EndpointPicker configures the Endpoint Picker extension deployment.
       * The operator creates and manages the EPP Deployment, Service, and
       * supporting resources alongside the InferencePool.
       */
      endpointPicker: {
        /**
         * FailureMode determines behavior when the EPP is unavailable.
         */
        failureMode?: 'FailOpen' | 'FailClose';
        /**
         * Image is the EPP container image.
         */
        image?: string;
        /**
         * Port of the EPP service (extProc gRPC port).
         */
        port?: number;
        /**
         * Replicas is the number of EPP pod replicas.
         */
        replicas?: number;
        /**
         * Resources for the EPP container (CPU, memory).
         * CPU limits are intentionally left unset by default to allow bursting
         * during scheduling spikes.
         */
        resources?: {
          /**
           * Claims lists the names of resources, defined in spec.resourceClaims,
           * that are used by this container.
           *
           * This field depends on the
           * DynamicResourceAllocation feature gate.
           *
           * This field is immutable. It can only be set for containers.
           */
          claims?: {
            /**
             * Name must match the name of one entry in pod.spec.resourceClaims of
             * the Pod where this field is used. It makes that resource available
             * inside a container.
             */
            name: string;
            /**
             * Request is the name chosen for a request in the referenced claim.
             * If empty, everything from the claim is made available, otherwise
             * only the result of this request.
             */
            request?: string;
            [k: string]: unknown;
          }[];
          /**
           * Limits describes the maximum amount of compute resources allowed.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          limits?: {
            [k: string]: number | string;
          };
          /**
           * Requests describes the minimum amount of compute resources required.
           * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
           * otherwise to an implementation-defined value. Requests cannot exceed Limits.
           * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
           */
          requests?: {
            [k: string]: number | string;
          };
          [k: string]: unknown;
        };
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Model defines the OCI model artifact and serving identity.
     */
    model: {
      /**
       * Image is the OCI reference for the model artifact.
       * It is used as a Kubernetes image volume source, leveraging node-level
       * container image caching for efficient model distribution.
       * Example: "registry.example.com/models/qwen3-32b:v1"
       */
      image: string;
      /**
       * ImagePullSecrets for pulling the model OCI artifact from a private registry.
       */
      imagePullSecrets?: {
        /**
         * Name of the referent.
         * This field is effectively required, but due to backwards compatibility is
         * allowed to be empty. Instances of this type with an empty value here are
         * almost certainly wrong.
         * More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
         */
        name?: string;
        [k: string]: unknown;
      }[];
      /**
       * MountPath is where the model artifact is mounted in serving containers.
       * The vLLM --model argument is automatically set to this path.
       */
      mountPath?: string;
      /**
       * Name is the model identifier used in OpenAI-compatible API requests
       * (e.g. "qwen/Qwen3-32B", "meta-llama/Llama-3-70B-Instruct").
       * This is passed to vLLM as --served-model-name.
       */
      name: string;
      [k: string]: unknown;
    };
    /**
     * Monitoring configures observability features.
     */
    monitoring?: {
      /**
       * PodMonitor configures Prometheus PodMonitor creation for serving pods.
       */
      podMonitor?: {
        /**
         * Enabled controls PodMonitor creation.
         */
        enabled?: boolean;
        /**
         * Interval between scrapes.
         */
        interval?: string;
        /**
         * Path is the HTTP endpoint to scrape metrics from.
         */
        path?: string;
        /**
         * PortName to scrape metrics from. Must match a named port on the vLLM container.
         */
        portName?: string;
        [k: string]: unknown;
      };
      [k: string]: unknown;
    };
    /**
     * Prefill optionally configures separate prefill pods for disaggregated serving.
     * When set, the serving architecture splits into Prefill (prompt processing)
     * and Decode (token generation) phases on separate pod groups.
     */
    prefill?: {
      /**
       * NodeSelector constrains pods to nodes with matching labels.
       */
      nodeSelector?: {
        [k: string]: string;
      };
      /**
       * Parallelism configures vLLM tensor/data parallelism for this role.
       */
      parallelism?: {
        /**
         * Data is the data-parallel-size: number of data-parallel replicas within a single pod.
         */
        data?: number;
        /**
         * DataLocal is the data-parallel-size-local for disaggregated serving.
         */
        dataLocal?: number;
        /**
         * Tensor is the tensor-parallel-size: number of GPUs used to shard a single model.
         */
        tensor?: number;
        [k: string]: unknown;
      };
      /**
       * Replicas is the desired number of pod replicas.
       */
      replicas?: number;
      /**
       * Resources for the vLLM container (CPU, memory).
       * GPU resources are automatically calculated from accelerator type
       * and parallelism (tensor * dataLocal) and should not be set manually.
       */
      resources?: {
        /**
         * Claims lists the names of resources, defined in spec.resourceClaims,
         * that are used by this container.
         *
         * This field depends on the
         * DynamicResourceAllocation feature gate.
         *
         * This field is immutable. It can only be set for containers.
         */
        claims?: {
          /**
           * Name must match the name of one entry in pod.spec.resourceClaims of
           * the Pod where this field is used. It makes that resource available
           * inside a container.
           */
          name: string;
          /**
           * Request is the name chosen for a request in the referenced claim.
           * If empty, everything from the claim is made available, otherwise
           * only the result of this request.
           */
          request?: string;
          [k: string]: unknown;
        }[];
        /**
         * Limits describes the maximum amount of compute resources allowed.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        limits?: {
          [k: string]: number | string;
        };
        /**
         * Requests describes the minimum amount of compute resources required.
         * If Requests is omitted for a container, it defaults to Limits if that is explicitly specified,
         * otherwise to an implementation-defined value. Requests cannot exceed Limits.
         * More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
         */
        requests?: {
          [k: string]: number | string;
        };
        [k: string]: unknown;
      };
      /**
       * Tolerations for the serving pods.
       */
      tolerations?: {
        /**
         * Effect indicates the taint effect to match. Empty means match all taint effects.
         * When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
         */
        effect?: string;
        /**
         * Key is the taint key that the toleration applies to. Empty means match all taint keys.
         * If the key is empty, operator must be Exists; this combination means to match all values and all keys.
         */
        key?: string;
        /**
         * Operator represents a key's relationship to the value.
         * Valid operators are Exists, Equal, Lt, and Gt. Defaults to Equal.
         * Exists is equivalent to wildcard for value, so that a pod can
         * tolerate all taints of a particular category.
         * Lt and Gt perform numeric comparisons (requires feature gate TaintTolerationComparisonOperators).
         */
        operator?: string;
        /**
         * TolerationSeconds represents the period of time the toleration (which must be
         * of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default,
         * it is not set, which means tolerate the taint forever (do not evict). Zero and
         * negative values will be treated as 0 (evict immediately) by the system.
         */
        tolerationSeconds?: number;
        /**
         * Value is the taint value the toleration matches to.
         * If the operator is Exists, the value should be empty, otherwise just a regular string.
         */
        value?: string;
        [k: string]: unknown;
      }[];
      [k: string]: unknown;
    };
    /**
     * RoutingProxy configures the llm-d routing sidecar for disaggregated serving.
     * Required when Prefill is set; the proxy routes prefill requests between pods.
     */
    routingProxy?: {
      /**
       * CertPath is the path to TLS certificates for the routing proxy.
       */
      certPath?: string;
      /**
       * Connector specifies the KV-cache transfer protocol.
       */
      connector?: string;
      /**
       * Image is the routing proxy container image.
       */
      image?: string;
      /**
       * PrefillerUseTLS enables TLS for prefiller communication.
       */
      prefillerUseTLS?: boolean;
      /**
       * SecureProxy enables TLS on the routing proxy.
       */
      secureProxy?: boolean;
      /**
       * TargetPort is the port where vLLM actually listens when the proxy is enabled.
       * The proxy intercepts on engine.port and forwards to this port.
       */
      targetPort?: number;
      /**
       * ZapEncoder sets the Zap log encoding format (e.g. "json", "console").
       */
      zapEncoder?: string;
      /**
       * ZapLogLevel sets the Zap log level (e.g. "debug", "info", "error").
       */
      zapLogLevel?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * Status represents the current state of the model serving deployment.
   */
  status?: {
    /**
     * Conditions store the status conditions of the ModelService.
     */
    conditions?: {
      /**
       * lastTransitionTime is the last time the condition transitioned from one status to another.
       * This should be when the underlying condition changed.  If that is not known, then using the time when the API field changed is acceptable.
       */
      lastTransitionTime: string;
      /**
       * message is a human readable message indicating details about the transition.
       * This may be an empty string.
       */
      message: string;
      /**
       * observedGeneration represents the .metadata.generation that the condition was set based upon.
       * For instance, if .metadata.generation is currently 12, but the .status.conditions[x].observedGeneration is 9, the condition is out of date
       * with respect to the current state of the instance.
       */
      observedGeneration?: number;
      /**
       * reason contains a programmatic identifier indicating the reason for the condition's last transition.
       * Producers of specific condition types may define expected values and meanings for this field,
       * and whether the values are considered a guaranteed API.
       * The value should be a CamelCase string.
       * This field may not be empty.
       */
      reason: string;
      /**
       * status of the condition, one of True, False, Unknown.
       */
      status: 'True' | 'False' | 'Unknown';
      /**
       * type of condition in CamelCase or in foo.example.com/CamelCase.
       */
      type: string;
      [k: string]: unknown;
    }[];
    /**
     * DecodeReady is the number of ready decode replicas.
     */
    decodeReady?: number;
    /**
     * DecodeReplicas is the desired number of decode replicas.
     */
    decodeReplicas?: number;
    /**
     * ObservedGeneration is the most recent generation observed by the controller.
     */
    observedGeneration?: number;
    /**
     * Phase is the high-level summary of the ModelService lifecycle.
     */
    phase?: string;
    /**
     * PrefillReady is the number of ready prefill replicas.
     */
    prefillReady?: number;
    /**
     * PrefillReplicas is the desired number of prefill replicas.
     */
    prefillReplicas?: number;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
